## Base container off of the existing nodejs-24 container. The alpine suffix
## means that it is based on alpine linux instead of Ubuntu.
FROM docker.io/library/node:24-alpine AS deps

# Working directory inside the container
WORKDIR /app

# This lets podman cache the packages. If the lockfile hasn't changed, then it
# won't re-download the packages.
COPY package.json package-lock.json* ./

# Run a clean install
RUN npm ci


## Build the sveltekit project
FROM docker.io/library/node:24-alpine AS builder
WORKDIR /app

# Copy the dependencies from the previous container stage.
COPY --from=deps /app/node_modules ./node_modules

# Copy the files necessary for building
COPY static static
COPY src src

COPY vite.config.ts vite.config.ts
COPY svelte.config.js svelte.config.js
COPY tsconfig.json tsconfig.json

COPY package.json package.json
COPY package-lock.json package-lock.json

# Build the project
RUN npm run build
# Remove dev dependencies
RUN npm prune --omit=dev

## Run the built sveltekit project
FROM docker.io/library/node:24-alpine AS runner
WORKDIR /app

# Creates an unprivledged user in alpine linux.
RUN addgroup -S sveltekit-group && adduser -S sveltekit-user -G sveltekit-group

ENV NODE_ENV=production

# Set the necessary paths
ENV PROJECTS_PATH=/app/projects/
ENV GUIDES_PATH=/app/guides/
ENV RECENT_PROJECTS=abyss,connect,planner

COPY --from=builder --chown=sveltekit-user:sveltekit-group /app/build ./build
COPY --from=builder --chown=sveltekit-user:sveltekit-group /app/node_modules ./node_modules
COPY --from=builder --chown=sveltekit-user:sveltekit-group /app/package.json .

# Run future commands as sveltekit-user
USER sveltekit-user

EXPOSE 3000
ENV PORT=3000
ENV HOST=0.0.0.0

CMD [ "node", "build/index.js" ]

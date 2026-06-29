import { redirect, error } from '@sveltejs/kit';
import { renderMarkdown } from '$lib/markdown';
import { getProjectArticle, getProjectMetadata } from '$lib/getProjects';

export const trailingSlash = 'always';

export function load({ params }) {
  let metadata = getProjectMetadata(params.slug)
  if (metadata.modules.map((v) => v.type).includes("article")) {
    const file = getProjectArticle(params.slug);

    return {
      article: renderMarkdown(file),
      metadata: metadata
    };
  } else {
    error(404, `Could not find an article for the project '${params.slug}'.`)
  }
}

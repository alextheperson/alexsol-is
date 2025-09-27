<script lang="ts">
	import Tags from '$lib/Tags.svelte';
	import Icon from '$lib/icon.svelte';
	import IconKey from '$lib/iconKey.json';

	const iconKey: { [_index: string]: string } = IconKey;

	export let data: {
		title: string;
		description: string;
		tags: string[];
		url: string;
		source?: string;
		source_name?: string;
		format: 'web' | 'external' | 'article';
	};

	export let tagEvent: ((tagName: string) => void) | null = null;
	export let formatEvent: ((formatName: string) => void) | null = null;
</script>

<div class="outer-wrapper">
	<div
		class="background"
		style="background-image:url('projects/{data.url}/assets/cover.png');"
	></div>
	<div class="infocard">
		<div class="title-wrapper">
			<span class="title">{data.title}</span>
			{#if formatEvent === null}
				<span class="format">{data.format}</span>
			{:else}
				<button
					class="format"
					onclick={() => {
						formatEvent(data.format);
					}}
				>
					{data.format}
				</button>
			{/if}
			<div class="diamond"></div>
		</div>
		<div class="details">
			<p class="description">{data.description}</p>
			<div class="links">
				{#if data.format === 'web'}
					<a href="/project/{data.url}/"><Icon iconName="nf-fa-eye" /> Visit</a>
					{#if data.source !== undefined && data.source_name !== undefined}
						<a href={data.source}
							>{#if iconKey[data.source_name.toLowerCase()] !== undefined}
								<Icon iconName={iconKey[data.source_name.toLowerCase()]} />
							{/if}
							{data.source_name}</a
						>
					{/if}
				{:else if data.format === 'external'}
					<a href={data.url}><Icon iconName="nf-fa-external_link" /> Visit</a>
					{#if data.source !== undefined && data.source_name !== undefined}
						<a href={data.source}
							>{#if iconKey[data.source_name.toLowerCase()] !== undefined}
								<Icon iconName={iconKey[data.source_name.toLowerCase()]} />
							{/if}
							{data.source_name}</a
						>
					{/if}
				{:else if data.format === 'article'}
					<a href="/projects/{data.url}/"><Icon iconName="nf-seti-text" /> Read</a>
					{#if data.source !== undefined && data.source_name !== undefined}
						<a href={data.source}
							>{#if iconKey[data.source_name.toLowerCase()] !== undefined}
								<Icon iconName={iconKey[data.source_name.toLowerCase()]} />
							{/if}
							{data.source_name}</a
						>
					{/if}
				{/if}
			</div>
			<Tags tags={data.tags} onclick={tagEvent} />
		</div>
	</div>
</div>

<style>
	a {
		color: var(--foreground);
		text-align: center;
		text-decoration: none;
	}

	.links {
		display: flex;
		justify-content: space-evenly;
		margin-bottom: 20px;
	}

	.links a {
		text-transform: capitalize;
	}

	a:hover {
		text-decoration: underline;
	}

	.outer-wrapper {
		position: relative;
		aspect-ratio: 4 / 5;
		overflow: hidden;
		--title-height: 75px;
	}

	.outer-wrapper * {
		transition: 0.25s ease-out;
	}

	.outer-wrapper::before {
		content: '';
		position: absolute;
		width: 200%;
		height: 200%;
		top: -50%;
		left: -50%;
		--hatch-color: color-mix(in srgb, var(--background), white 5%);
		background-image: linear-gradient(
			to bottom,
			var(--hatch-color) 3%,
			var(--background) 4%,
			var(--background) 46%,
			var(--hatch-color) 47%,
			var(--hatch-color) 53%,
			var(--background) 54%,
			var(--background) 96%,
			var(--hatch-color) 97%
		);
		background-size: 40px 40px;
		rotate: -85deg;
	}

	.outer-wrapper:nth-child(2n)::before {
		rotate: 24deg;
	}

	.outer-wrapper:nth-child(-2n + 5)::before {
		rotate: 72deg;
	}

	.outer-wrapper:nth-child(3n-1)::before {
		rotate: 286deg;
	}

	.outer-wrapper:nth-child(4n-3)::before {
		rotate: 47deg;
	}

	.outer-wrapper:nth-child(4n + 1)::before {
		rotate: -143deg;
	}

	.outer-wrapper:nth-child(5n) ::before {
		rotate: 52deg;
	}

	.background {
		position: absolute;
		height: calc(100% - var(--title-height));
		width: 100%;
		background-size: contain;
		background-position: center;
		background-repeat: no-repeat;
	}

	.infocard {
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		transform: translate(0, calc(100% - var(--title-height)));
		display: flex;
		flex-direction: column;
	}

	.outer-wrapper:hover .infocard,
	.background:hover + .infocard,
	.infocard:hover {
		transform: translate(0, 0);
	}

	.outer-wrapper:hover .background,
	.background:hover {
		transform: translate(0, var(--title-height));
	}

	.title-wrapper {
		background-color: color-mix(in srgb, var(--background) 100%, transparent 5%);

		background-color: color-mix(in srgb, var(--background), white 5%);

		padding: 10px;
		height: var(--title-height);
		display: flex;
		align-items: center;
		justify-content: center;
		flex-direction: column;
		gap: 3px;
		border-bottom: 3px solid var(--primary);
	}

	.title {
		font-size: 1.5em;
		overflow: hidden;
		text-wrap: nowrap;
	}

	.format {
		font-size: 1em;
		opacity: 0.5;
		text-transform: capitalize;
		background: none;
		border: none;
	}

	button.format {
		cursor: pointer;
	}

	.diamond {
		width: 1em;
		height: 1em;
		background-color: var(--primary);
		rotate: 45deg;
		position: absolute;
		translate: 0 calc(0.5 * var(--title-height));
		transition: 0.5s;
	}

	.outer-wrapper:hover .diamond {
		rotate: 405deg;
	}

	.details {
		flex-grow: 1;
		padding: 10px;
		background-color: color-mix(in srgb, var(--background) 100%, transparent 25%);
		display: flex;
		flex-direction: column;
		gap: 0.75em;
	}

	.details > * {
		margin-block: 0;
	}

	.description {
		flex-grow: 1;
	}

	@media (prefers-reduced-motion: reduce) {
		.outer-wrapper * {
			transition: 0s;
		}

		.diamond {
			transition: 0s;
		}
	}
</style>

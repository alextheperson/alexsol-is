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
	};
</script>

<a href="/project/{data.url}">
	<div class="outer-wrapper" style="background-image:url(/covers/p/{data.url});">
		<div class="infocard">
			<div class="title-wrapper">
				<span class="title">{data.title}</span>
			</div>
			<div class="details">
				<p class="description">{data.description}</p>
				{#if data.source !== undefined && data.source_name !== undefined}
					<a href={data.source}
						>{#if iconKey[data.source_name.toLowerCase()] !== undefined}
							<Icon iconName={iconKey[data.source_name.toLowerCase()]} />
						{/if}
						{data.source_name}</a
					>
				{/if}
				<Tags tags={data.tags} />
			</div>
		</div>
	</div>
</a>

<style>
	a {
		color: var(--foreground);
		text-align: center;
		margin-bottom: 10px;
		text-decoration: none;
	}

	a:hover {
		text-decoration: underline;
	}

	.outer-wrapper {
		background-color: var(--background);
		background-size: cover;
		position: relative;
		aspect-ratio: 4 / 5;
		overflow: hidden;
	}

	.infocard {
		--title-height: 75px;
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		transform: translate(0, calc(100% - var(--title-height)));
		transition: 0.3s;
		display: flex;
		flex-direction: column;
	}

	.outer-wrapper:hover .infocard {
		transform: translate(0, 0);
	}

	.title-wrapper {
		background-color: color-mix(in srgb, var(--background) 100%, transparent 5%);
		padding: 10px;
		height: var(--title-height);
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.title {
		font-size: 1.5em;
	}

	.details {
		flex-grow: 1;
		padding: 10px;
		background-color: color-mix(in srgb, var(--background) 100%, transparent 25%);
		display: flex;
		flex-direction: column;
	}

	.description {
		display: block;
		flex-grow: 1;
	}
</style>

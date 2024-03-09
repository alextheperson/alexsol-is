<script lang="ts">
	import Tags from '$lib/Tags.svelte';

	export let title: string;
	export let description: string;
	export let imagePath: string;
	export let tags: string[];
	export let url: string;
</script>

<a href={url}>
	<div class="outer-wrapper" style="background-image:url({imagePath});">
		<div class="infocard">
			<div class="title-wrapper">
				<span class="title">{title}</span>
			</div>
			<div class="details">
				<p class="description">{description}</p>
				<Tags {tags} />
			</div>
		</div>
	</div>
</a>

<style>
	a {
		color: var(--foreground);
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

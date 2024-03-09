<script lang="ts">
	import Tags from '$lib/Tags.svelte';

	export let title: string;
	export let description: string;
	export let imageURL: string;
	export let tags: string[];
	export let url: string;
</script>

<a href={url}>
	<div class="project-preview">
		<div class="thumbnail" style="background-image:url('{imageURL}'"></div>
		<div class="details">
			<span class="title">{title}</span>
			<p class="description">{description}</p>
			<Tags {tags} />
		</div>
	</div>
</a>

<style>
	a {
		color: var(--foreground);
		text-decoration: none;
	}

	.project-preview {
		padding: 20px;
		display: flex;
		height: 175px;
		gap: 20px;
	}

	.project-preview:hover {
		background-color: var(--background);
	}

	.thumbnail {
		aspect-ratio: 1 / 1;
		background-size: cover;
		height: 100%;
	}

	.title {
		font-size: 1.5em;
	}
</style>

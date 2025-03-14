<script lang="ts">
	import 'highlight.js/styles/github-dark-dimmed.css';
	export let data;
</script>

<svelte:head>
	<title>{data.metadata.title} - Guides - Alexsol.is</title>
	<meta name="description" content={data.metadata.description} />
</svelte:head>

{@html data.article}

<style>
	:global(img) {
		max-width: calc(100% - 4em);
		margin: 2em;
	}
</style>

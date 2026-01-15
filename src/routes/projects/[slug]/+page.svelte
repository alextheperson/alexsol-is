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
	:global(h1) {
		font-size: 3em;
	}
	:global(img) {
		max-width: 100%;
		box-sizing: border-box;
		max-height: 20vh;
		margin-inline: auto;
	}
	:global(img, p, row, grid) {
		margin-block: 2em;
		display: block;
	}

	/* LAYOUT OPTIONS */
	/* These are dynamic based on the number of children. */
	:global(row, grid) {
		display: grid;
		gap: 2em;
	}
	:global(row:has(:nth-child(2))) {
		grid-template-columns: repeat(2, 1fr);
	}
	:global(row:has(:nth-child(3))) {
		grid-template-columns: repeat(3, 1fr);
	}
	:global(row:has(:nth-child(4))) {
		grid-template-columns: repeat(4, 1fr);
	}

	:global(grid:has(:nth-child(4))) {
		grid-template-rows: repeat(2, 1fr);
		grid-template-columns: repeat(2, 1fr);
	}
	:global(grid:has(:nth-child(9))) {
		grid-template-rows: repeat(3, 1fr);
		grid-template-columns: repeat(3, 1fr);
	}
	:global(grid:has(:nth-child(16))) {
		grid-template-rows: repeat(4, 1fr);
		grid-template-columns: repeat(4, 1fr);
	}

	:global(grid:has(:nth-child(6))) {
		grid-template-rows: repeat(3, 1fr);
		grid-template-columns: repeat(2, 1fr);
	}
	:global(grid:has(:nth-child(12))) {
		grid-template-rows: repeat(4, 1fr);
		grid-template-columns: repeat(3, 1fr);
	}

	:global(figure) {
		margin: 0;
	}

	:global(figure > img) {
		margin-bottom: 0.25em;
	}
</style>

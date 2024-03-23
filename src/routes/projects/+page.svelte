<script lang="ts">
	import Card from './Card.svelte';

	export let data;

	let query = '';

	let cardSize = 290;
	let projectGridWidth = 100;
	let cardMargin = 20;

	function matchesQuery(project: (typeof data.files)[0]) {
		return project.title.toLowerCase().includes(query.toLowerCase());
	}
</script>

<svelte:head>
	<title>Projects - Alexsol.is</title>
	<meta
		name="description"
		content="A list of all of the projects that I have worked on over the years."
	/>
</svelte:head>

<input placeholder="Search" bind:value={query} />

<div
	class="project-grid"
	bind:clientWidth={projectGridWidth}
	style="grid-template-columns:repeat({Math.round(
		(projectGridWidth + cardMargin) / (cardSize + cardMargin)
	)}, 1fr)"
>
	{#key query}
		{#each data.files as project}
			{#if matchesQuery(project)}
				<Card data={project} />
			{/if}
		{/each}
	{/key}
</div>

<style>
	input {
		font-size: 2em;
		width: 100%;
		background-color: var(--background);
		border-style: none;
		color: var(--foreground);
		outline: 0 solid var(--primary);
		outline-offset: 0;
		transition: 0.1s;
		padding: 6px;
		margin-bottom: 20px;
	}

	input:focus {
		outline-width: 3px;
		outline-offset: -3px;
	}

	.project-grid {
		display: grid;
		gap: 20px;
	}
</style>

<script lang="ts">
	import Card from './projects/Card.svelte';
	export let data;

	let cardSize = 290;
	let projectGridWidth = 100;
	let cardMargin = 20;
</script>

<svelte:head>
	<title>Alexsol.is</title>
	<meta
		name="description"
		content="My home page. View a list of the projects that I have worked on most recently."
	/>
</svelte:head>

<h1>Hello There!</h1>
<p class="line-1">I'm Alex Solis, a collector of projects.</p>
<p class="line-2">Here are some highlights from my collection</p>
<div
	class="recent-projects"
	bind:clientWidth={projectGridWidth}
	style="grid-template-columns:repeat({Math.round(
		(projectGridWidth + cardMargin) / (cardSize + cardMargin)
	)}, 1fr)"
>
	{#each data.topProjects as project}
		<Card data={project}></Card>
	{/each}
</div>

<style>
	.recent-projects {
		display: flex;
		gap: 20px;
	}

	h1 {
		font-size: 3em;
	}

	.line-1 {
		font-size: 1.5em;
		margin-bottom: 5em;
	}

	.line-2 {
		font-size: 2em;
	}

	.recent-projects {
		display: grid;
		gap: 20px;
	}
</style>

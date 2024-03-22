<script lang="ts">
	import Card from './projects/Card.svelte';
	export let data;
</script>

<h1>Hello There!</h1>
<p class="line-1">I'm Alex Solis, a collector of projects.</p>
<p class="line-2">Here are some highlights from my collection</p>
<div class="recent-projects">
	{#each data.topProjects as project}
		<Card data={project}></Card>
	{/each}
</div>

<style>
	.recent-projects {
		display: flex;
		gap: 20px;
	}

	:global(.recent-projects > a > div) {
		width: 300px;
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
</style>

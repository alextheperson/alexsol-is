<script lang="ts">
	import Card from './Card.svelte';

	export let data;
</script>

<svelte:head>
	<title>Projects - Alexsol.is</title>
	<meta
		name="description"
		content="A list of all of the projects that I have worked on over the years."
	/>
</svelte:head>

<div class="project-grid">
	{#each data.files as project}
		<Card data={project} />
	{/each}
</div>

<style>
	.project-grid {
		display: grid;
		gap: 20px;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	}
</style>

<script lang="ts">
	import Card from './projects/Card.svelte';
	export let data;
</script>

<svelte:head>
	<title>Alexsol.is - Home</title>
	<meta
		name="description"
		content="My home page. View a list of the projects that I have worked on most recently."
	/>
</svelte:head>

<h1>Hello There, I'm <b>Alex Solis</b></h1>
<p class="line-1">
	I'm hungry for knowledge and always looking for projects to add to my collection.
</p>
<p class="line-2">Here are some highlights</p>
<div class="recent-projects">
	{#each data.topProjects as project}
		<Card data={project}></Card>
	{/each}
</div>
<p>
	In addition to my pursuit of new projects, I'm also always on the lookout for new skills or
	knowledge, especially when it comes to technical theater.
</p>

<style>
	.recent-projects {
		display: flex;
		gap: 20px;
		grid-template-columns: repeat(auto-fill, minmax(235px, 1fr));
		font-size: 0.75em;
	}

	h1 {
		font-size: 3em;
		font-weight: normal;
	}

	.line-1 {
		font-size: 1.5em;
		margin-bottom: 2.5em;
	}

	.line-2,
	p {
		font-size: 1.5em;
	}

	.recent-projects {
		display: grid;
		gap: 20px;
	}
</style>

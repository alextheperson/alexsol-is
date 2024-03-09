<script lang="ts">
	import Card from './Card.svelte';
	import Nf from '$lib/icon.svelte';

	export let data;
</script>

<div class="project-grid">
	{#each data.fileData as project}
		<Card
			title={project.title}
			description={project.description}
			imagePath="/covers/p/{project.url}"
			tags={project.tags}
			url="/projects/{project.url}"
		/>
	{/each}
</div>

<style>
	.project-grid {
		display: grid;
		gap: 20px;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
	}
</style>

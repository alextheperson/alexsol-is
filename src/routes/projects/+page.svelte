<script lang="ts">
	import Card from './Card.svelte';

	export let data;
</script>

<div class="project-grid">
	{#each data.files as project}
		<Card
			title={project.title}
			description={project.description}
			imagePath="/covers/p/{project.url}"
			tags={project.tags}
			url="/project/{project.url}"
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

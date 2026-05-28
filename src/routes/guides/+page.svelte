<script lang="ts">
	import Preview from './Preview.svelte';

	export let data;
</script>

<svelte:head>
	<title>Guides - Alexsol.is</title>
	<meta
		name="description"
		content="A list of guides that I've made to help people who run into the same problems as me."
	/>
</svelte:head>

<div class="project-list">
	{#each data.guides as guide}
		{#if !(guide.hide ?? false)}
			<Preview
				title={guide.title}
				description={guide.description}
				imageURL="guides/{guide.url}/assets/cover.webp"
				tags={guide.tags}
				url="guides/{guide.url}"
			/>
		{/if}
	{/each}
</div>

<style>
	.project-list {
		display: flex;
		flex-direction: column;
		gap: 20px;
		margin-inline: calc(var(--slant-size) * -1);
		margin-block: calc(var(--slant-size) / -2);
	}
</style>

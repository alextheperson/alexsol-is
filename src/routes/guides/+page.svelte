<script lang="ts">
	import Preview from './Preview.svelte';

	export let data;
</script>

<div class="project-list">
	{#each data.guideData as guide}
		<Preview
			title={guide.title}
			description={guide.description}
			imageURL="covers/g/{guide.url}"
			tags={guide.tags}
			url="/guides/{guide.url}"
		/>
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

<script lang="ts">
	export let tags: string[];

	import IconKey from '$lib/iconKey.json';
	import Icon from './icon.svelte';

	const iconKey: { [_index: string]: string } = IconKey;
</script>

<div class="tags">
	{#each tags as tag}
		<span class="tag">
			{#if iconKey[tag.toLowerCase()] !== undefined}
				<Icon iconName={iconKey[tag.toLowerCase()]} />
			{/if}
			{tag}</span
		>
	{/each}
</div>

<style>
	.tags {
		display: flex;
		gap: 5px;
		flex-wrap: wrap;
	}

	.tag {
		border: 2px solid var(--primary);
		border-radius: 25em;
		padding: 6px 6px 7px;
		font-size: 0.75em;
		background: color-mix(in srgb, var(--background) 100%, transparent 70%);
	}
</style>

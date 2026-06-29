<script lang="ts">
	export let tags: string[];
	export let onclick: ((tagName: string) => void) | null = null;

	import IconKey from '$lib/iconKey';
	import Icon from './icon.svelte';
</script>

<div class="tags">
	{#if onclick === null}
		{#each tags as tag}
			<span class="tag">
				{#if IconKey[tag.toLowerCase()] !== undefined}
					<Icon iconName={IconKey[tag.toLowerCase()]} />
				{/if}
				{tag}</span
			>
		{/each}
	{:else}
		{#each tags as tag}
			<button
				class="tag"
				onclick={() => {
					onclick(tag);
				}}
			>
				{#if IconKey[tag.toLowerCase()] !== undefined}
					<Icon iconName={IconKey[tag.toLowerCase()]} />
				{/if}
				{tag}</button
			>
		{/each}
	{/if}
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
		padding: 0.4em 0.8em;
		font-size: 0.75em;
		background: color-mix(in srgb, var(--background) 100%, transparent 70%);
		text-transform: capitalize;
		transition: 0.3s;
	}

	.tag:hover {
		/* text-decoration: underline 1px solid; */
		background-color: #fff2;
	}

	button.tag {
		cursor: pointer;
	}
</style>

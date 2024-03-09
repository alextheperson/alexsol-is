<script lang="ts">
	import 'highlight.js/styles/github-dark-dimmed.css';
	export let data;
</script>

{@html data.guide}

<style>
	:global(img) {
		max-width: calc(100% - 4em);
		margin: 2em;
	}
</style>

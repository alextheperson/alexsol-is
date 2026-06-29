<script lang="ts">
	import Card from './Card.svelte';
	import Tags from '$lib/Tags.svelte';

	export let data;

	let tags: string[] = [];
	let formats: string[] = [];
	let query: string[] = [];
	let showAll = false;

	let inputValue = '';

	function parseQuery() {
		inputValue = inputValue.trimStart();
		let tokens = inputValue.split(' ');
		let tagTokens = [];
		let formatTokens = [];
		let queryTokens = [];

		for (let i = 0; i < tokens.length; i++) {
			let prefix = tokens[i].split(':');
			switch (prefix[0]) {
				case 'tag':
					tagTokens.push(prefix.slice(1).join().toLowerCase());
					break;
				case 'module':
					formatTokens.push(prefix.slice(1).join().toLowerCase());
					break;
				case 'show': // Equivalent to `show:all:`
					if (prefix[1] == 'all' && prefix[2] == '') {
						showAll = true;
						break;
					}
				default:
					if (tokens[i].length === 0) {
						break;
					}
					queryTokens.push(tokens[i].toLowerCase());
			}
		}
		tags = tagTokens;
		formats = formatTokens;
		query = queryTokens;
	}
    function checkList(projectProperty: string[], tokens: string[]) {
		if (tokens.length === 0 || projectProperty.length === 0) {
			return true;
		}

		for (let i = 0; i < projectProperty.length; i++) {
            for (let j = 0; j < tokens.length; j++) {
                if (projectProperty[i].includes(tokens[j])) {
                    return true;
                }
            }
		}

		return false;
    }

	function matchesQuery(project: (typeof data.files)[0]) {
		return (
			checkList([project.title.toLowerCase()], query) &&
			checkList([project.tags.join().toLowerCase()], tags) &&
			checkList(project.modules.map((v) => v.type), formats) &&
            !(project.hide ?? false) || showAll
		);
	}
</script>

<svelte:head>
	<title>Projects - Alexsol.is</title>
	<meta
		name="description"
		content="A list of all of the projects that I have worked on over the years."
	/>
</svelte:head>

<div>
	<input
		placeholder="Search"
		title="Try &quot;tag:&quot; or &quot;module:&quot; in your search query!"
		oninput={() => {
			parseQuery();
		}}
		bind:value={inputValue}
	/>
	<div class="filter-bar">
		{#if query.length > 0 || tags.length > 0 || formats.length > 0 || showAll}
			<span><b>Filtering</b></span>
		{/if}

		{#if query.length > 0}
			<span> | Title Contains</span>
			<span><i>"{query.join('", "')}"</i></span>
		{/if}

		{#if tags.length > 0}
			<span> | <i>Tags Include</i></span>
			<Tags {tags}></Tags>
		{/if}

		{#if formats.length > 0}
			<span> | Type is</span>
			<span><i>"{formats.join('", "')}"</i></span>
		{/if}

		{#if showAll}
			<span> | Showing Hidden Projects</span>
		{/if}
	</div>
</div>

<div class="project-grid">
	{#key [query, tags, formats]}
		{#each data.files as project}
			{#if matchesQuery(project)}
                <Card
                    data={project}
                    tagEvent={(e: string) => {
                        inputValue += ' tag:' + e;
                        parseQuery();
                    }}
                />
			{/if}
		{/each}
	{/key}
</div>

<style>
	input {
		font-size: 2em;
		width: 100%;
		background-color: var(--background);
		border-style: none;
		color: var(--foreground);
		outline: 0 solid var(--primary);
		outline-offset: 0;
		transition: 0.1s;
		padding: 6px;
	}

	input:focus {
		outline-width: 3px;
		outline-offset: -3px;
	}

	.filter-bar {
		display: flex;
		align-items: center;
		gap: 5px;
		margin-bottom: 20px;
		height: 33px;
		margin-top: 3px;
	}

	.project-grid {
		display: grid;
		gap: 20px;
		grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
	}
</style>

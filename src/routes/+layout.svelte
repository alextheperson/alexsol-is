<script lang="ts">
	import { page } from '$app/stores';
	import '$lib/global.css';
	import facts from '$lib/facts.json';

	let shownFact: string;

	function getFact() {
		const randomNumber = Math.floor(Math.random() * (facts.length - 1));
		shownFact = facts[randomNumber];
	}

	getFact();
</script>

<svelte:head>
	<title>Alexsol.is</title>
</svelte:head>

<header>
	<div class="main-segment">
		<h1>Alexsol.is</h1>
		<a class={$page.url.pathname === '/' ? 'selected' : ''} href="/">Home</a>
		<a class={$page.url.pathname.endsWith('about') ? 'selected' : ''} href="/about">About</a>
		<a class={$page.url.pathname.endsWith('projects') ? 'selected' : ''} href="/projects"
			>Projects</a
		>
		<a class={$page.url.pathname.endsWith('guides') ? 'selected' : ''} href="/guides">Guides</a>
	</div>
	{#key shownFact}
		<div class="second-segment" on:mouseenter={getFact} role="banner">
			{shownFact}
		</div>
	{/key}
</header>

<main>
	<slot />
</main>

<style>
	header {
		height: 75px;
		display: flex;
		--slant-size: 50px;
		margin-bottom: 20px;
	}

	h1 {
		font-size: 1.5em;
		margin-inline-end: 30px;
	}

	.main-segment {
		background-color: var(--primary);
		height: 100%;
		padding: 20px calc(20px + var(--slant-size)) 20px 20px;
		clip-path: polygon(0 0, 100% 0, calc(100% - var(--slant-size)) 100%, 0 100%);
		display: flex;
		justify-content: center;
		align-items: center;
		flex-grow: 0;
		transition: 0.6s;

		position: relative;
		z-index: 9;
	}

	.second-segment {
		background-color: var(--secondary);
		flex-grow: 1;
		margin-inline-start: calc(-1 * var(--slant-size));
		padding: 10px 10px 10px calc(10px + var(--slant-size));
		display: flex;
		justify-content: center;
		align-items: center;
		vertical-align: middle;
		height: min-content;
		max-height: 75%;
		overflow: hidden;
	}

	main {
		width: 80%;
		margin-inline: auto;

		position: relative;

		--slant-size: 20px;
		--wing-width: var(--slant-size);

		/* padding: calc(var(--slant-size) / 2); */
		padding-inline: calc(var(--slant-size) * 2);
		min-height: calc(var(--slant-size) * 2);
	}

	main::before,
	main::after {
		position: absolute;
		top: 0;
		bottom: 0;
		content: '';
		display: block;
		width: var(--wing-width);
		background-color: var(--primary);
	}

	main::before {
		left: 0;
		clip-path: polygon(
			0 var(--slant-size),
			0 calc(100% - var(--slant-size)),
			var(--slant-size) 100%,
			100% 100%,
			100% 0,
			var(--slant-size) 0
		);
	}

	main::after {
		right: 0;
		clip-path: polygon(
			0 0,
			0 100%,
			calc(100% - var(--slant-size)) 100%,
			100% calc(100% - var(--slant-size)),
			100% var(--slant-size),
			calc(100% - var(--slant-size)) 0
		);
	}

	a {
		margin-inline: 1em;
		padding-inline: 0.4em;
		padding-block: 0.2em;
		position: relative;
	}

	a,
	a:link,
	a:hover,
	a:active,
	a:visited {
		color: var(--foreground);
		text-decoration: none;
	}

	a.selected {
		outline: 2px solid var(--foreground);
	}

	a:hover::before {
		position: absolute;
		top: 0;
		left: 0;
		content: '';
		width: 0.5em;
		height: 100%;
		border: 2px solid var(--foreground);
		border-inline-end: 0px none transparent;

		transform: translate(-2px, -2.2px);
	}

	a:hover::after {
		position: absolute;
		top: 0;
		right: 0;
		content: '';
		width: 0.5em;
		height: 100%;
		border: 2px solid var(--foreground);
		border-inline-start: 0px none transparent;

		transform: translate(2px, -2.2px);
	}

	@media only screen and (max-width: 992px) {
		.main-segment {
			flex-grow: 1;
			clip-path: polygon(0 0, 100% 0%, 100% 100%, 0% 100%);
		}

		.second-segment {
			display: none;
		}
	}
</style>

<script lang="ts">
	import '$lib/global.css';
	import facts from '$lib/facts.json';
	import { page } from '$app/state';

	let { children } = $props();

	let shownFact = $state('');

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
		<a class="vanilla" href="/"><h1>Alexsol.is</h1></a>
		<label class="menu-opener">
			<input type="checkbox" class="menu" aria-label="Show Menu" checked={false} />
			<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg" stroke="white" stroke-width="5">
				<line x1="5" y1="5" x2="95" y2="5"></line>
				<line x1="5" y1="50" x2="95" y2="50"></line>
				<line x1="5" y1="95" x2="95" y2="95"></line>
			</svg>
		</label>

		<div class="dropdown">
			<a class={page.url.pathname === '/' ? 'selected' : ''} href="/">Home</a>
			<a class={page.url.pathname.endsWith('about') ? 'selected' : ''} href="/about">About</a>
			<a class={page.url.pathname.endsWith('projects') ? 'selected' : ''} href="/projects"
				>Projects</a
			>
			<a class={page.url.pathname.endsWith('theater') ? 'selected' : ''} href="/theater">Theater</a>
		</div>
	</div>
	<div class="shadow-segment"></div>
	{#key shownFact}
		<div class="second-segment" onmouseleave={getFact} title={shownFact} role="banner">
			{shownFact}
		</div>
	{/key}
</header>

<main>
	{@render children()}
</main>

<style>
	/*	:global(html) {
		background: red;
	}*/

	header {
		height: 75px;
		display: flex;
		--slant-size: 50px;
		margin-bottom: 20px;
		z-index: 1;
		position: relative;
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

		position: relative;
	}

	.shadow-segment {
		background-color: #0007;
		height: 50%;
		padding: 10px calc(10px + calc(0.45 * var(--slant-size))) 10px 10px;
		clip-path: polygon(
			calc(0.5 * var(--slant-size)) 0,
			100% 0,
			calc(100% - calc(0.5 * var(--slant-size))) 100%,
			0 100%
		);
		display: flex;
		justify-content: center;
		align-items: center;
		flex-grow: 0;

		position: relative;
		translate: calc(-0.5 * var(--slant-size)) 0;
	}

	.second-segment {
		background-color: var(--secondary);
		flex-grow: 1;
		margin-inline-start: calc(-3 * var(--slant-size));
		padding: 10px 10px 10px calc(10px + var(--slant-size));
		display: flex;
		justify-content: end;
		align-items: center;
		vertical-align: middle;
		height: 50%;
		overflow: hidden;
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

	a:not(vanilla).selected {
		outline: 2px solid var(--foreground);
	}

	a:not(.vanilla)::after,
	a:not(.vanilla)::before {
		position: absolute;
		top: 0;
		content: '';
		width: 0.5em;
		height: 100%;
		border: 0px solid transparent;
		transition: 0.2s;
	}

	a:not(.vanilla)::before {
		left: 0;
		transform: translate(-5px, -0.2px);
	}

	a:not(.vanilla)::after {
		right: 0;
		transform: translate(5px, -0.2px);
	}

	a:not(.vanilla):hover::before {
		transform: translate(-2px, -2.2px);
		border: 2px solid var(--foreground);
		border-inline-end: 0px none transparent;
	}

	a:not(.vanilla):hover::after {
		transform: translate(2px, -2.2px);
		border: 2px solid var(--foreground);
		border-inline-start: 0px none transparent;
	}

	.menu-opener input {
		width: 0;
		height: 0;
		position: fixed;
		top: 0;
		outline: none;
	}

	.menu-opener {
		display: none;
		height: 100%;
		aspect-ratio: 1 / 1;
	}

	div.dropdown {
		display: flex;
		flex-direction: row;
	}

	div.dropdown * {
		z-index: 10;
	}

	@media only screen and (max-width: 1100px) {
		.main-segment {
			flex-grow: 1;
			clip-path: polygon(0 0, 100% 0%, 100% 100%, 0% 100%);
		}

		.second-segment,
		.shadow-segment {
			display: none;
		}
	}

	@media (max-width: 768px) {
		main::before,
		main::after {
			content: unset;
		}

		main {
			margin: 0;
			width: 100%;
			font-size: 0.9em;
		}

		.main-segment {
			padding: 20px;
			overflow: visible;
			clip-path: unset;
			position: relative;
		}

		.menu-opener {
			display: block;
		}

		.menu-opener:focus-within svg {
			outline: auto;
		}

		div.dropdown {
			display: flex !important;
			flex-direction: column;
			position: absolute;
			right: 0;
			bottom: 0;
			translate: 0 var(--slant-size);
			padding: 20px 20px calc(20px + var(--slant-size)) 20px;
			background-color: var(--secondary);
			clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - var(--slant-size)));
			transition: 0.2s;
			gap: 1em;
			text-align: center;
			font-size: 1.2em;

			z-index: -1;
		}

		.menu-opener:has(input:checked) + div.dropdown {
			translate: 0 100%;
		}

		a::before,
		a::after {
			content: unset;
			display: none;
		}
	}

	@media (prefers-reduced-motion: reduce) {
		a:not(.vanilla)::after,
		a:not(.vanilla)::before {
			transition: 0s;
		}

		div.dropdown {
			transition: 0s;
		}
	}
</style>

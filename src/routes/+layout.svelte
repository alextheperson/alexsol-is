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
		<a class={page.url.pathname === '/' ? 'selected' : ''} href="/">Home</a>
		<a class={page.url.pathname.endsWith('about') ? 'selected' : ''} href="/about">About</a>
		<a class={page.url.pathname.endsWith('projects') ? 'selected' : ''} href="/projects">Projects</a
		>
		<!--<a class={$page.url.pathname.endsWith('guides') ? 'selected' : ''} href="/guides">Guides</a>-->
		<a class={page.url.pathname.endsWith('theater') ? 'selected' : ''} href="/theater">Theater</a>
	</div>
	<div class="shadow-segment"></div>
	{#key shownFact}
		<div class="second-segment" onmouseleave={getFact} title={shownFact} role="banner">
			{shownFact}
		</div>
	{/key}
</header>

<main>
	<div>
		{@render children()}
	</div>
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
		transition: 0.6s;

		position: relative;
		z-index: 9;
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

	main > div {
		background-color: color-mix(in srgb, var(--backdrop), transparent 30%);
		/* outline: 10px solid var(--backdrop);*/
		padding: 10px;
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

	@media only screen and (max-width: 1100px) {
		.main-segment {
			flex-grow: 1;
			clip-path: polygon(0 0, 100% 0%, 100% 100%, 0% 100%);
		}

		.second-segment {
			display: none;
		}
	}
</style>

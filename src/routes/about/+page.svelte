<svelte:head>
	<title>About Me - Alexsol.is</title>
	<meta name="description" content="All about me, Alex Solis" />
</svelte:head>

<article>
	<h1>About Me</h1>
	<p>
		My name is Alex Solis, and I like to build stuff. I originally got hooked on building through
		LEGO, and eventually joined a First Lego League team, then a First Tech Challenge team a few
		years later. Currently, I am working on building a combat robot to compete at NHRL. In addition
		to building robots, I perform Shakespeare with The Young Shakespeare Players East, and do
		technical theater wherever I can.
	</p>
</article>

<article>
	<h1>About This Website</h1>
	<p>
		This website is written with <a href="https://svelte.dev/">SvelteKit</a> and
		<a href="https://www.typescriptlang.org/">Typescript</a>, and apart from the search bar on the
		<a href="projects">Projects Page</a>, will run without any Javascript. For the list of projects,
		the server automatically fetches info for all of the projects and renders them into a list for
		your viewing pleasure.
	</p>
</article>

<article>
	<h1>Software I Use</h1>
	<table>
		<tbody>
			<tr>
				<th>Editor</th>
				<td><a href="https://neovim.io/">Neovim</a></td>
			</tr>
			<tr>
				<th>Operating System</th>
				<td>
					<a href="https://github.com/nix-community/nixos-apple-silicon">NixOS, but ✨Asahi✨</a>
				</td>
			</tr>
			<tr>
				<th>Window Manager</th>
				<td><a href="https://hypr.land/">Hyprland</a></td>
			</tr>
			<tr>
				<th>Browser</th>
				<td><a href="https://floorp.app/en-US">Floorp</a>, with custom CSS</td>
			</tr>
		</tbody>
	</table>
</article>

<style>
	th {
		padding-inline-end: 1em;
		text-align: left;
	}
</style>

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
		I have a separate git repository that keeps track of the metadata for each project. A clone of
		that repository exists on the server, which the server looks at to give you the list of
		projects.
	</p>
</article>

<article>
	<h1>About My Desktop</h1>
	<table>
		<tbody>
			<tr>
				<th>Operating System</th>
				<td>
					<a href="https://github.com/nix-community/nixos-apple-silicon">NixOS, but ✨Asahi✨</a>
				</td>
			</tr>
			<tr>
				<th>Display Manager</th>
				<td><a href="https://codeberg.org/fairyglade/ly">Ly</a></td>
			</tr>
			<tr>
				<th>Window Manager</th>
				<td><a href="https://github.com/YaLTeR/niri">niri</a></td>
			</tr>
			<tr>
				<th>Menu Bar</th>
				<td><a href="https://github.com/Alexays/Waybar">Waybar</a></td>
			</tr>
			<tr>
				<th>Wallpaper</th>
				<td>
					<a href="https://codeberg.org/dnkl/wbg">wbg</a>, displaying a wallpaper of my own design (<a
						href="/wallpaper.png">view</a
					>,
					<a href="/wallpaper.png" download>download</a>) that I made with
					<a href="https://blender.org">Blender</a>
				</td>
			</tr>
		</tbody>
	</table>
	<br />
	<br />
	<img
		src="/system-screenshot.png"
		alt="A screenshot of my desktop, showing a terminal window with Neofetch, a terminal window with Btop, a terminal window with Neovim, and a Floorp window."
	/>
</article>

<article>
	<h1>Software I Use Frequently</h1>
	<table>
		<tbody>
			<tr>
				<th>Editor</th>
				<td><a href="https://neovim.io/">Neovim</a></td>
			</tr>
			<tr>
				<th>Browser</th>
				<td
					><a href="https://floorp.app/en-US">Floorp</a>, with
					<a href="https://github.com/mbnuqw/sidebery">Sideberry</a> and custom CSS</td
				>
			</tr>
			<tr>
				<th>Music</th>
				<td>
					<a href="https://git.fawkes.io/mtnash/dmm">DMM</a>
				</td>
			</tr>
			<tr>
				<th>Organization</th>
				<td>
					<a href="https://github.com/alextheperson/todo-rs">todo-rs</a> and
					<a href="https://joplinapp.org/">Joplin</a>
				</td>
			</tr>
		</tbody>
	</table>
</article>

<style>
	th {
		padding-inline-end: 1em;
		text-align: left;
	}

	img {
		max-width: 100%;
	}
</style>

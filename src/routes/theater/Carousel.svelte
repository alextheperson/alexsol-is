<script lang="ts">
	import { page } from '$app/state';

	let pages = [
		{
			url: "/portfolio/Page 1.webp",
			notes: "",
			altText: "A collage showing photographs of lighting design, a lighing plot made in Vectorworks, and text that reads \"Lighting Design - John Deserves to Die. I had a unique challenge during John Deserves to Die. It was performed in ¾ round on the floor of the theater, which reduced our possible hang positions significantly. I used color temperature and edge quality to highlight the variable tensions that happen between characters during the show.\"",
		},
		{
			url: "/portfolio/Page 2.webp",
			notes: "",
			altText: "A photo-collage showing the construction of a red maccaw puppet. It is shown under construction and in use onstage during a show. Text on the collage reads \"Parrot Puppet - Treasure Island. I built a parrot puppet for my school's production of Treasure Island. The parrot's body is felt stretched over amature wire and foam, and the beak is papier-mache.\"",
		},
		{
			url: "/portfolio/Page 3.webp",
			notes: "",
			altText: "A collection of photos showing lighting design for a show. There are photographs of the stage during the show. Two pictures show realistic lighting during scenes in the real world, while pictures below them show vibrant, colorful lighting for scenes in wonderland. Photo credit to Julian Parker Burns. In addition to the phographs are four hand-drawn lighting plots. Text on the slide reads \"Lighting Design - Alice By Heart. I was the lighting designer for my school's production of Alice by Heart. I used the lights to emphasize the contrast between the real world and Alice's imagination.\"",
		},
		{
			url: "/portfolio/Page 4.webp",
			notes: `The complete design can be found on <a href="https://cad.onshape.com/documents/7b9e0380ea9a5bf7b2ecf193/w/0419c64438c575769c294494/e/4f67d6fe28c8eec2e034a99d">OnShape</a>. If you would like more detail, you can also read my <a href="/projects/abyss/">project writeup</a>.`,
			altText: "A collage with photos of my combat robot. It is shown during a fight, before a fight and fully dissassembled on a workbench with all of its components neatly arranged. A CAD model of the robot is also show. Text in the collage reads \"Combat Robot. I worked with a friend to design and build a combat robot for the National Havoc Robot League. Our robot is a two-wheeled, invertible, horizontal spinner with a theoretical maximum speed of over 15,000 RPM. The robot has a total of 97 individ parts. Some are off-the-shely components, but many of them are custom parts that I designed and either fabricated myself with 3D printers, a laser cutter, CNC router, and hand tools, or had manufactured. I did all of the CAD design for the robot in OnShape. You can view the complete design at cad.onshape.com/documents/7b9e0380ea9a5bf7b2ecf193/w/0419c64438c575769c294494/e/4f67d6fe28c8eec2e034a99d\"",
		},
		{
			url: "/portfolio/Page 5.webp",
			notes: "",
			altText: "Two pictures show a large purple puppet shaped like a ball onstage during a show. Two accompanying pictures show the puppet under construction. Text on the slide reads \"Beholder Puppet - She Kills Monsters. I designed a human scale beholder puppet for my school's production of She Kills Monsters. I was also the stage manager for the production. The beholder is constructed from chicken wire and papier-mache, with handles inside and an articulated mouth.\"",
		},
		{
			url: "/portfolio/Page 6.webp",
			notes: "",
			altText: "The image shows captions alongside four pages from a script. The pages each have several lighting and sound cues notated. The captions read \"Stage Management - Eurydice. I worked on a senior capstone production of Eurydice during my junior year. I was the stage manager, constructed the set, and designed the lights. These are some excerpts from my cue script that I called the show with.\"",
		},
		{
			url: "/portfolio/Page 7.webp",
			notes: "",
			altText: "A collage of photos showing three set pieces created for a production of Eurydice. First is the elevator. It is a black wooden door with a dial above it showing its location on the third floor. Second is the string room, constructed of two circles made of PVC pipe, connected my three vertical columns to create a cylinder. String runs between small hooks placed on the top and bottom circles. Finally is the water pump. It sits on a PVC pipe stand ad is also painted black. Also in the collage is text, which reads \"Set - Eurydice. I worked on a senior capstone production of Eurydice during my junior year. I was the stage manager, constructed the set, and designed the lights. The set for the show included an elevator (top right), a room made of string (center right), and a water pump (bottom right).\"",
		},
		{
			url: "/portfolio/Page 8.webp",
			notes: "",
			altText: "A collage showing the lighting design I did for Eurydice. In addition to two photgraphs (credit to Zoey Puffer), there are also three hand-drawn focus plots. Text in the collage reads \"Lighting Design - Eurydice. I worked on a senior capstone production of Eurydice during my junior year. I was the stage manager, constructed the set, and designed the lights. The lighting accentuated the distance between the world of the living and the underworld, by separating the stage into distinct sections.\"",
		},
		{
			url: "/portfolio/Page 9.webp",
			notes: `If you would like more detail, you can also read my <a href="/projects/outbound-light/">project writeup</a>.`,
			altText: "A collectino of photos show the progress of a small light-controlling device. It is shown being tested on a breadboard, in a printed circuit board, and inside a 3D printed case. Text in the image reads \"Practical Light Rig - Outbound. I worked on a device to light up on a character's chest for a senior capstone production in the spring semester of my senior year. I was also the stage manager for the production. My device uses an ESP32 on a custom circuit board to listen for OSC signals, which allows it to be controlled from QLab.\"",
		},
		{
			url: "/portfolio/Page 10.webp",
			notes: "",
			altText: "A captioned photograph of a hand-drawn rep plot. The rep plot shows shows lights placed throughout the house of the theater to provide light to the audience during the Jazz Cafe event. The caption reads \"Lighting Design - Jazz Cafe. I designed the lights for a school 'Jazz Cafe' event. I created a light plot to help while hanging the lights.\"",
		},
		{
			url: "/portfolio/Page 11.webp",
			notes: "",
			altText: "A collage showing the construction of a costume for the Witch King. It contains a 3D printed mask and two pauldrons in addition to a black robe. Text alongside the images reads \"The Witch King of Angmar. I dressed up as the Witch King of Angmar from The Lord of the Rings for Halloween in 2024. The mask was 3D printed, covered with drywal  compound, sanded, and then painted. I made the pauldrons out of EVA foam and thermoplastic.\"",
		},
		{
			url: "/portfolio/Page 12.webp",
			notes: "",
			altText: "Three images of the lighting from a circus show. The performers are doing tricks in the air which cast colorful shadows onto the wall. Text reads \"Lighting Design - SHOW Circus. I have designed and run lights and sound for the annual SHOW Circus Gala for the past three years. These are pictures from the most recent show. For this show, I had fun playing with the way that the performers cast shadows.\"",
		},
		{
			url: "/portfolio/Page 13.webp",
			notes: "",
			altText: "Images show the construction of two props. On the left, a large faux-leather-bound book with text \"Prospero's Book - The Tempest. I created Proseero's magic book for a production of The Tempest. I was also a part of the cast, and played Stephano.\". On the right, a Roman spear with text \"Spears - Julius Caesar. I created spears for a production of Julius Caesar. In addition, I was in the cast playing Julius Caesar. I made a miniature version to test the shape of the 3D printed spearhead.\"",
		},
		{
			url: "/portfolio/Page 14.webp",
			notes: `If you would like more detail, you can also read my <a href="/projects/stilt-lights/">project writeup</a>.`,
			altText: "Images show the construction of lights that run up the legs of three pairs of stilts. The light are show under construction in a workshop, and onstage. Cations read \"Stilt Lights - SHOW Circus. I was asked to design a lighting effect for a stilt act in a circus show. Each pair of stilts had a battery, microcontroller, and power switch, along with a vibration sensor so that the lights could react to the stilters' steps\"",
		},
		{
			url: "/portfolio/Page 15.webp",
			notes: "",
			altText: "Three screenshots show designs created in the software AutoCAD. A caption reads \"CAD - Massasoit CC. During junior year, I took an AutoCAD class at Massasoit Community College. These are some of the drawings that I made during the class.\"",
		},
		{
			url: "/portfolio/Page 16.webp",
			notes: `You can find the full page <a href="/portfolio/rhino-sounds/">here</a>. Alternatively, preview the sound files below.<fieldset><legend><i>Anguished Trumpeting</i></legend><audio controls><source src="/portfolio/rhinoceros-sound-files/Anguished Trumpeting.wav" type="audio/wav" />It looks liko your browser is unable to play audio files. You can download the file directly athttps://alexsol.is/portfolio/rhinoceros-sound-files/Anguished Trumpeting.wav</audio></fieldset><fieldset><legend><i>Long Rhino Loop</i></legend><audio controls loop><source src="/portfolio/rhinoceros-sound-files/Long Rhino Loop.wav" type="audio/wav" />It looks liko your browser is unable to play audio files. You can download the file directly athttps://alexsol.is/portfolio/rhinoceros-sound-files/Long Rhino Loop.wav</audio></fieldset><fieldset><legend><i>Melodic Rhino</i></legend><audio controls><source src="/portfolio/rhinoceros-sound-files/Melodic Rhino.wav" type="audio/wav" />It looks liko your browser is unable to play audio files. You can download the file directly athttps://alexsol.is/portfolio/rhinoceros-sound-files/Melodic Rhino.wav</audio></fieldset>`,
			altText: "There are no images, just text. The text reads \"Sound Design - Rhinoceros. I designed the sound for a senior capstone production of Rhinoceros. Real rhinos do not make very much noise, but the director wanted them to sound large and scary. To make the sounds, I used a mixture of different animal sounds, inciucing horses, pigs, and elephants. Audio does not embed very well into PDFs, so you can listen to some of the rhinoceros sounds on my website. https://alexsol.is/portfolio/rhino-sounds.\"",
		},
		{
			url: "/portfolio/Page 17.webp",
			notes: `If you would like more detail, you can also read my <a href="/projects/ftc/">project writeup</a>.`,
			altText: "A collage of images show a robot under construction alongside 3D renders of it in CAD. A caption reads \"CAD - First Tech Challenge. I spent 4 years on a First Tech Challenge robotics team. During that time, I did almost all of the hardware design Autodesk Fusion 360. Here are some 3D renders and photographs of our robot for the 2023-2024 season.\"",
		},
		{
			url: "/portfolio/Page 18.webp",
			notes: `If you would like more detail, you can also read my <a href="/projects/prom-jacket/">project writeup</a>.`,
			altText: "A graphite drawing of a shanty-town constructed on large stilts standing in the middle of the ocean. A caption reads \"Oil Rig. I made this drawing to challenge my perspective and shading skills. I prioritized shading over linework for the majority of the piece.\"",
		},
		{
			url: "/portfolio/Page 19.webp",
			notes: "",
			altText: "Five photographs show a black velvet jacket with six white stars sewn on. Some images show the stars lit up or being sewn on. Captions read \"Light-up Jacket. I created a jacket with light up stars for prom in my junior year. Each star is controlled from within the jacket by a microcontroller that I programmed. The biggest challenge with this project was get the the stars to diffuse the light well. I ended up using 3 different layers of fabric and a 3D printed spacer.\"",
		},
	];

	let currentPage = page.url.hash ? parseInt(page.url.hash.slice(1)) : 0;

	function previousPage() {
		if (currentPage <= 0) {
			currentPage = pages.length - 1;
		} else {
			currentPage -= 1;
		}

		window.location.hash = "#" + currentPage;
	}

	function nextPage() {
		if (currentPage >= pages.length - 1) {
			currentPage = 0;
		} else {
			currentPage += 1;
		}

		window.location.hash = "#" + currentPage;
	}
</script>

<div class="carousel">
	<button onclick={previousPage}>&lt;</button>
		<div class="content">
			<p class="current-page">{currentPage + 1}/{pages.length}</p>
			<div class="images">
				{#key currentPage}
				<!-- This is here to preload the images because they are somewhat big -->
				{#if currentPage > 0}
					<div class="page previous">
						<p>{@html pages[currentPage - 1].notes}</p>
						<img src="{pages[currentPage - 1].url}" alt="{pages[currentPage - 1].altText}">
					</div>
				{/if}
				<div class="page current">
					<p>{@html pages[currentPage].notes}</p>
					<img src="{pages[currentPage].url}" alt="{pages[currentPage].altText}">
				</div>
				<!-- This is here to preload the images because they are somewhat big -->
				{#if currentPage < pages.length - 1}
					<div class="page next">
						<p>{@html pages[currentPage + 1].notes}</p>
						<img src="{pages[currentPage + 1].url}" alt="{pages[currentPage + 1].altText}">
					</div>
				{/if}
				{/key}
			</div>
		</div>
	<button onclick={nextPage}>&gt;</button>
</div>

<style>
	.content {
		flex-grow: 1;
	}

	.images {
		position: relative;
		overflow: hidden;
		min-height: 200px;
	}

	.images::before {
		content: "";
		position: absolute;
		width: 200%;
		height: 200%;
		top: -50%;
		left: -50%;
		--hatch-color: color-mix(in srgb, var(--backdrop), white 3%);
		background-image: 
		linear-gradient(to right, var(--hatch-color) 1%, transparent 1%, transparent 49%, var(--hatch-color) 49%, var(--hatch-color) 51%, transparent 51%, transparent 99%, var(--hatch-color) 99%),
		linear-gradient(to bottom, var(--hatch-color) 1%, var(--backdrop) 1%, var(--backdrop) 49%, var(--hatch-color) 49%, var(--hatch-color) 51%, var(--backdrop) 51%, var(--backdrop) 99%, var(--hatch-color) 99%);
		background-size: 50px 50px;
		rotate: -24deg;
	}

	.current-page {
		width: 100%;
		font-size: 1.3em;
		text-align: center;
		margin: 0;
	}

	.page {
		position: relative;
	}

	.page.previous {
		transform: translate(-110%, 0);
		position: absolute;
		top: 0;
	}

	.page.next {
		transform: translate(110%, 0);
		position: absolute;
		top: 0;
	}

	p {
		margin-top: 0;
	}

	img {
		width: 100%;
		max-height: unset;
		margin: 0;
	}

	.carousel {
		display: flex;
		gap: 1rem;
		width: 100%;
	}

	:global(fieldset) {
		border-color: var(--secondary);
		border-width: 3px;
		border-radius: 3px;
		padding: 15px;
	}

	:global(audio) {
		width: 100%;
		box-shadow: none;
	}

	button {
		font-size: 2em;
		border: 2px solid var(--primary);
		color: var(--primary);
		background-color: transparent;
	}

	button:hover {
		background-color: var(--primary);
		color: var(--foreground);
	}
</style>

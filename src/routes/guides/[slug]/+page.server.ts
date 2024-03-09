import { env } from '$env/dynamic/private';
import { readFileSync } from 'fs';
import { marked } from 'marked';
import { join } from 'path';
import { fileURLToPath } from 'url';
import hljs from 'highlight.js/lib/common';

function codeRenderer(code: string, infostring: string | undefined, escaped: boolean) {
	console.log(code, infostring, escaped);
	return `<pre><code class="hljs">${hljs.highlight(code, { language: infostring ?? '' }).value}</code></pre>`;
}

marked.use({ renderer: { code: codeRenderer } });

export function load({ params }) {
	const guideDirectory = fileURLToPath(new URL('../../../..' + env.GUIDES_PATH, import.meta.url));
	const file = readFileSync(join(guideDirectory, params.slug, 'guide.md'), 'utf-8');

	return {
		guide: marked.parse(file)
	};
}

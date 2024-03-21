import { marked } from 'marked';
import hljs from 'highlight.js/lib/common';
import { getGuideContent } from '$lib/getGuides.js';

function codeRenderer(code: string, infostring: string | undefined, escaped: boolean) {
	console.log(code, infostring, escaped);
	return `<pre><code class="hljs">${hljs.highlight(code, { language: infostring ?? '' }).value}</code></pre>`;
}

marked.use({ renderer: { code: codeRenderer } });

export function load({ params }) {
	const file = getGuideContent(params.slug);

	return {
		guide: marked.parse(file)
	};
}

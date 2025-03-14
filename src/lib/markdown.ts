import { marked } from 'marked';
import hljs from 'highlight.js/lib/common';


function codeRenderer(code: string, infostring: string | undefined, escaped: boolean) {
  return `<pre><code class="hljs">${hljs.highlight(code, { language: infostring ?? '' }).value}</code></pre>`;
}

export function renderMarkdown(file: string, syntaxHighlight?: boolean) {
  if (syntaxHighlight ?? false) {
    marked.use({ renderer: { code: codeRenderer } });
  }
  return marked.parse(file)
}

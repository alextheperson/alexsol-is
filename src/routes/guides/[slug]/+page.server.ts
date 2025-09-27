import { getGuideContent, getGuideMetadata } from '$lib/getGuides.js';
import { renderMarkdown } from '$lib/markdown';

export const trailingSlash = 'always';

export function load({ params }) {
  const file = getGuideContent(params.slug);

  return {
    guide: renderMarkdown(file),
    metadata: getGuideMetadata(params.slug)
  };
}

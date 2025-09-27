import { redirect, error } from '@sveltejs/kit';
import { renderMarkdown } from '$lib/markdown';
import { getProjectArticle, getProjectMetadata } from '$lib/getProjects';

export const trailingSlash = 'always';

export function load({ params }) {
  let metaData = getProjectMetadata(params.slug)
  if (metaData.format === "article") {
    const file = getProjectArticle(params.slug);

    return {
      article: renderMarkdown(file),
      metadata: getProjectMetadata(params.slug)
    };

  } else if (metaData.format === "web") {
    redirect(307, `/project/${params.slug}`);
  } else {
    error(404, "That project does not exist.")
  }
}

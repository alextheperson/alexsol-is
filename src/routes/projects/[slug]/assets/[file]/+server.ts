import { getProjectResource } from '$lib/getProjects.js';

export function GET({ params }) {
  const file = getProjectResource(params.slug, params.file);
  const cacheAge = 24 * 60 * 60; // one day

  return new Response(file, {
    headers: { 'cache-control': `max-age=${cacheAge}` }
  });
}

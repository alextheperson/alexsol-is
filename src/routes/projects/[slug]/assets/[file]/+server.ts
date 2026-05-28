import { getProjectResource } from '$lib/getProjects.js';

export function GET({ params }) {
  const file = getProjectResource(params.slug, params.file);
  const cacheAge = 60 * 60 * 24 * 30; // one month

  return new Response(file, {
    headers: { 'cache-control': `max-age=${cacheAge}` }
  });
}

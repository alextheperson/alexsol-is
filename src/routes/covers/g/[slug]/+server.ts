import { getGuideResource } from '$lib/getGuides.js';

export function GET({ params }) {
	const file = getGuideResource(params.slug, 'cover.png');
	const cacheAge = 24 * 60 * 60; // one day

	return new Response(file, {
		headers: { 'Content-Type': 'image/png', 'cache-control': `max-age=${cacheAge}` }
	});
}

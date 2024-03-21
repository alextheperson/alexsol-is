import { getProjectResource } from '$lib/getProjects.js';

export function GET({ params }) {
	const file = getProjectResource(params.slug, 'cover.png');

	return new Response(file, { headers: { 'Content-Type': 'image/png' } });
}

import { env } from '$env/dynamic/private';
import { readFileSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';

export function GET({ params }) {
	const projectDirectory = fileURLToPath(
		new URL('../../../../..' + env.PROJECTS_PATH, import.meta.url)
	);
	const file = readFileSync(join(projectDirectory, params.slug, 'cover.png'));

	return new Response(file, { headers: { 'Content-Type': 'image/png' } });
}

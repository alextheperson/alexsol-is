import config from '$lib/config';
import { readFileSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';

export function GET({ params }) {
	const guideDirectory = fileURLToPath(
		new URL('../../../../..' + config.GUIDES_PATH, import.meta.url)
	);
	const file = readFileSync(join(guideDirectory, params.slug, 'cover.png'));

	return new Response(file, { headers: { 'Content-Type': 'image/png' } });
}

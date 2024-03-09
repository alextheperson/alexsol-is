import { readFileSync, readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { env } from '$env/dynamic/private';
import { join } from 'node:path';

export type GuideData = {
	title: string;
	description: string;
	bigImage: string;
	tags: string[];
};

export function load() {
	const projectDirectory = fileURLToPath(new URL('../../..' + env.GUIDES_PATH, import.meta.url));
	const files = readdirSync(projectDirectory);

	const guideData = files.map((val) => {
		return {
			...(JSON.parse(
				readFileSync(join(projectDirectory, val, 'guide.json'), 'utf-8')
			) as GuideData),
			url: val
		};
	});

	return {
		guideData: guideData,
		path: env.GUIDES_PATH
	};
}

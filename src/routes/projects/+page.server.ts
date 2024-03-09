import { readFileSync, readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { env } from '$env/dynamic/private';
import { join } from 'node:path';

export type ProjectData = {
	title: string;
	description: string;
	bigImage: string;
	tags: string[];
};

export function load() {
	const projectDirectory = fileURLToPath(new URL('../../..' + env.PROJECTS_PATH, import.meta.url));
	const files = readdirSync(projectDirectory);

	const fileData = files.map((val) => {
		return {
			...(JSON.parse(
				readFileSync(join(projectDirectory, val, 'project.json'), 'utf-8')
			) as ProjectData),
			url: val
		};
	});

	return {
		fileData,
		path: env.PROJECTS_PATH
	};
}

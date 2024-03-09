import { env } from '$env/dynamic/private';
import { readFileSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';

export type ProjectData = {
	title: string;
	description: string;
	bigImage: string;
	tags: string[];
};

export function load() {
	const projectDirectory = fileURLToPath(new URL('../..' + env.PROJECTS_PATH, import.meta.url));

	const topProjects = env.RECENT_PROJECTS.split(',').map((val) => {
		return {
			...(JSON.parse(
				readFileSync(join(projectDirectory, val, 'project.json'), 'utf-8')
			) as ProjectData),
			url: val
		};
	});

	return {
		topProjects,
		path: env.PROJECTS_PATH
	};
}

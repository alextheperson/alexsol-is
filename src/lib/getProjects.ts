import { readFileSync, readdirSync } from 'node:fs';
import config from '$lib/config';
import { join } from 'node:path';

export type ProjectData = {
	title: string;
	description: string;
	tags: string[];
};

export function getProjectList() {
	return readdirSync(config.PROJECTS_PATH);
}

export function getProjectResource(projectName: string, resourceName: string) {
	return readFileSync(join(config.PROJECTS_PATH, projectName, resourceName));
}

export function getProjectMetadata(projectName: string) {
	return {
		...(JSON.parse(
			readFileSync(join(config.PROJECTS_PATH, projectName, 'project.json'), 'utf-8')
		) as ProjectData),
		url: projectName
	};
}

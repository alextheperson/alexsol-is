import { readFileSync, readdirSync } from 'node:fs';
import config from '$lib/config';
import { join } from 'node:path';

export type GuideData = {
	title: string;
	description: string;
	bigImage: string;
	tags: string[];
};

export function getGuideList() {
	return readdirSync(config.GUIDES_PATH);
}

export function getGuideResource(projectName: string, resourceName: string) {
	return readFileSync(join(config.GUIDES_PATH, projectName, resourceName));
}

export function getGuideContent(projectName: string) {
	return readFileSync(join(config.GUIDES_PATH, projectName, 'guide.md'), 'utf-8');
}

export function getGuideMetadata(projectName: string) {
	return {
		...(JSON.parse(
			readFileSync(join(config.GUIDES_PATH, projectName, 'guide.json'), 'utf-8')
		) as GuideData),
		url: projectName
	};
}

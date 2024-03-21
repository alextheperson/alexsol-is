import config from '$lib/config';
import { getProjectMetadata } from '$lib/getProjects';

export type ProjectData = {
	title: string;
	description: string;
	bigImage: string;
	tags: string[];
};

export function load() {
	const topProjects = config.RECENT_PROJECTS.split(',').map((val) => {
		return {
			...getProjectMetadata(val),
			url: val
		};
	});

	return {
		topProjects,
		path: config.PROJECTS_PATH
	};
}

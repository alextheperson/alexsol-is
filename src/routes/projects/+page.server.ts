import { getProjectList, getProjectMetadata } from '$lib/getProjects';

export type ProjectData = {
	title: string;
	description: string;
	bigImage: string;
	tags: string[];
};

export function load() {
	const files = getProjectList();
	const fileData = files.map((val) => {
		return getProjectMetadata(val);
	});

	return { files: fileData };
}

import { getProjectList, getProjectMetadata } from '$lib/getProjects';

export function load() {
	const files = getProjectList();
	const fileData = files.map((val) => {
		return getProjectMetadata(val);
	});

	return { files: fileData };
}

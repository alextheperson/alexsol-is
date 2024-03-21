import { getGuideList, getGuideMetadata } from '$lib/getGuides';

export function load() {
	const files = getGuideList();

	const guideData = files.map((val) => {
		return {
			...getGuideMetadata(val),
			url: val
		};
	});

	return {
		guides: guideData
	};
}

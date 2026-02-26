import type { PageServerLoad } from './$types.js';
import { getLearnerProgress } from '$lib/db/queries.js';

export const prerender = process.env.PUBLIC_STATIC === 'true';

export const load: PageServerLoad = async ({ cookies }) => {
	if (process.env.PUBLIC_STATIC === 'true') {
		return { learnerId: null, completedSteps: [] };
	}

	const learnerId = cookies.get('wid') ?? null;
	let completedSteps: { moduleId: string; exerciseId: string; stepIndex: number }[] = [];

	if (learnerId) {
		const items = await getLearnerProgress(learnerId);
		completedSteps = items.map((i) => ({
			moduleId: i.moduleId,
			exerciseId: i.exerciseId,
			stepIndex: i.stepIndex
		}));
	}

	return { learnerId, completedSteps };
};

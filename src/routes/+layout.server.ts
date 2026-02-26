import type { LayoutServerLoad } from './$types.js';
import { loadAllModules } from '$lib/content/loader.js';
import { getLearner } from '$lib/db/queries.js';

export const load: LayoutServerLoad = async ({ cookies }) => {
	const modules = loadAllModules();

	if (process.env.PUBLIC_STATIC === 'true') {
		return { modules, learner: null };
	}

	const learnerId = cookies.get('wid') ?? null;
	const learner = learnerId ? await getLearner(learnerId) : null;
	return {
		modules,
		learner: learner ? { id: learner.id, name: learner.name, role: learner.role } : null
	};
};

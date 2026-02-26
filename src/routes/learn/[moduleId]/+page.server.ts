import type { PageServerLoad } from './$types.js';
import { loadModule, loadAllModules } from '$lib/content/loader.js';
import { getLearnerProgress } from '$lib/db/queries.js';
import { error } from '@sveltejs/kit';

export const prerender = process.env.PUBLIC_STATIC === 'true';

export const entries = () => {
	return loadAllModules().map((mod) => ({ moduleId: mod.id }));
};

export const load: PageServerLoad = async ({ params, cookies }) => {
	const { moduleId } = params;
	let mod;
	try {
		mod = loadModule(moduleId);
	} catch {
		error(404, `Module "${moduleId}" not found`);
	}

	if (process.env.PUBLIC_STATIC === 'true') {
		return { module: mod, completedSteps: [], completedExerciseIds: [] };
	}

	const learnerId = cookies.get('wid')!;
	const progressItems = await getLearnerProgress(learnerId);
	const completedSteps = progressItems
		.filter((i) => i.moduleId === moduleId)
		.map((i) => ({ exerciseId: i.exerciseId, stepIndex: i.stepIndex }));

	const completedExerciseIds = mod.exercises
		.filter((ex) => {
			const done = completedSteps.filter((s) => s.exerciseId === ex.id).length;
			const total = (ex as { steps?: unknown[] }).steps?.length ?? 0;
			return done >= total && total > 0;
		})
		.map((ex) => ex.id);

	return { module: mod, completedSteps, completedExerciseIds };
};

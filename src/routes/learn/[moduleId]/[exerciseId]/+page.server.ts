import type { PageServerLoad } from './$types.js';
import { loadModule, loadExercise, loadAllModules, loadExerciseMeta } from '$lib/content/loader.js';
import { getLearnerProgress } from '$lib/db/queries.js';
import { error } from '@sveltejs/kit';

export const prerender = process.env.PUBLIC_STATIC === 'true';

export const entries = () => {
	return loadAllModules().flatMap((mod) =>
		loadExerciseMeta(mod.id).map((ex) => ({ moduleId: mod.id, exerciseId: ex.id }))
	);
};

export const load: PageServerLoad = async ({ params, cookies }) => {
	const { moduleId, exerciseId } = params;
	let exercise;
	let mod;
	try {
		exercise = loadExercise(moduleId, exerciseId);
		mod = loadModule(moduleId);
	} catch {
		error(404, 'Exercise not found');
	}

	if (process.env.PUBLIC_STATIC === 'true') {
		return { exercise, module: mod, completedStepIndices: [], completedExerciseIds: [] };
	}

	const learnerId = cookies.get('wid')!;
	const progressItems = await getLearnerProgress(learnerId);
	const completedStepIndices = progressItems
		.filter((i) => i.moduleId === moduleId && i.exerciseId === exerciseId)
		.map((i) => i.stepIndex);

	const completedExerciseIds = mod.exercises
		.filter((ex) => {
			const done = progressItems.filter(
				(p) => p.moduleId === moduleId && p.exerciseId === ex.id
			).length;
			return done >= (ex.steps?.length ?? 0) && (ex.steps?.length ?? 0) > 0;
		})
		.map((ex) => ex.id);

	return {
		exercise,
		module: mod,
		completedStepIndices,
		completedExerciseIds
	};
};

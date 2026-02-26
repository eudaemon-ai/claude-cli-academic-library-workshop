import type { PageServerLoad } from './$types.js';
import { error } from '@sveltejs/kit';
import { getLearner, getLearnerProgress, getLearnerNotes } from '$lib/db/queries.js';

export const prerender = false;
import { loadAllModules } from '$lib/content/loader.js';
import { formatDate } from '$lib/utils/format.js';

export const load: PageServerLoad = async ({ params, url }) => {
	const token = url.searchParams.get('token');
	if (!token || token !== process.env.FACILITATOR_TOKEN) {
		error(403, 'Facilitator token required');
	}

	const { learnerId } = params;
	const [learner, progressItems, noteItems] = await Promise.all([
		getLearner(learnerId),
		getLearnerProgress(learnerId),
		getLearnerNotes(learnerId)
	]);

	if (!learner) error(404, 'Learner not found');

	const allModules = loadAllModules();

	// Build a timeline of completed steps
	const timeline = progressItems
		.sort((a, b) => a.completedAt.localeCompare(b.completedAt))
		.map((p) => {
			const mod = allModules.find((m) => m.id === p.moduleId);
			const ex = mod?.exercises.find((e) => e.id === p.exerciseId);
			return {
				moduleTitle: mod?.title ?? p.moduleId,
				exerciseTitle: ex?.title ?? p.exerciseId,
				stepIndex: p.stepIndex,
				completedAt: formatDate(p.completedAt)
			};
		});

	const notes = noteItems.map((n) => {
		const mod = allModules.find((m) => m.id === n.moduleId);
		const ex = mod?.exercises.find((e) => e.id === n.exerciseId);
		return {
			moduleTitle: mod?.title ?? n.moduleId,
			exerciseTitle: ex?.title ?? n.exerciseId,
			body: n.body,
			updatedAt: formatDate(n.updatedAt)
		};
	});

	return {
		learner: { name: learner.name, role: learner.role, lastSeen: formatDate(learner.lastSeen) },
		timeline,
		notes,
		token
	};
};

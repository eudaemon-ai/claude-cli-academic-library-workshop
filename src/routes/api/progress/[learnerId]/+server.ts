import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types.js';
import { getLearnerProgress, getLearnerNotes } from '$lib/db/queries.js';

// Facilitator-only endpoint: returns any learner's full progress.
// Requires X-Facilitator-Token header.
export const GET: RequestHandler = async ({ params, request }) => {
	const token = request.headers.get('x-facilitator-token');
	if (!token || token !== process.env.FACILITATOR_TOKEN) {
		return json({ error: 'unauthorized' }, { status: 401 });
	}

	const { learnerId } = params;
	const [progressItems, noteItems] = await Promise.all([
		getLearnerProgress(learnerId),
		getLearnerNotes(learnerId)
	]);

	return json({
		steps: progressItems.map((i) => ({
			moduleId: i.moduleId,
			exerciseId: i.exerciseId,
			stepIndex: i.stepIndex,
			completedAt: i.completedAt
		})),
		notes: noteItems.map((n) => ({
			moduleId: n.moduleId,
			exerciseId: n.exerciseId,
			body: n.body,
			updatedAt: n.updatedAt
		}))
	});
};

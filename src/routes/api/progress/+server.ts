import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types.js';
import { getLearnerProgress, recordStepComplete } from '$lib/db/queries.js';

export const prerender = false;

export const GET: RequestHandler = async ({ cookies }) => {
	const learnerId = cookies.get('wid');
	if (!learnerId) return json({ error: 'no session' }, { status: 401 });

	const items = await getLearnerProgress(learnerId);
	const steps = items.map((i) => ({
		moduleId: i.moduleId,
		exerciseId: i.exerciseId,
		stepIndex: i.stepIndex,
		completedAt: i.completedAt
	}));
	return json({ steps });
};

export const POST: RequestHandler = async ({ request, cookies }) => {
	const learnerId = cookies.get('wid');
	if (!learnerId) return json({ error: 'no session' }, { status: 401 });

	const { moduleId, exerciseId, stepIndex } = await request.json();

	if (typeof moduleId !== 'string' || typeof exerciseId !== 'string' || typeof stepIndex !== 'number') {
		return json({ error: 'invalid payload' }, { status: 400 });
	}

	await recordStepComplete({ learnerId, moduleId, exerciseId, stepIndex });
	return json({ ok: true });
};

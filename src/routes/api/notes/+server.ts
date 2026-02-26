import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types.js';
import { upsertNote } from '$lib/db/queries.js';

export const prerender = false;

export const POST: RequestHandler = async ({ request, cookies }) => {
	const learnerId = cookies.get('wid');
	if (!learnerId) return json({ error: 'no session' }, { status: 401 });

	const { moduleId, exerciseId, body } = await request.json();
	if (typeof moduleId !== 'string' || typeof exerciseId !== 'string' || typeof body !== 'string') {
		return json({ error: 'invalid payload' }, { status: 400 });
	}

	await upsertNote({ learnerId, moduleId, exerciseId, body });
	return json({ ok: true });
};

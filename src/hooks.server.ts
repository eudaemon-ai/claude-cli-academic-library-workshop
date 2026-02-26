import type { Handle } from '@sveltejs/kit';
import { updateLastSeen } from '$lib/db/queries.js';

export const handle: Handle = async ({ event, resolve }) => {
	const learnerId = event.cookies.get('wid');
	if (learnerId) {
		// Best-effort update — don't block the request if DynamoDB is unavailable
		updateLastSeen(learnerId).catch(() => {});
	}
	return resolve(event);
};

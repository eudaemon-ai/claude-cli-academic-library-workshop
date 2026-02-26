import { redirect } from '@sveltejs/kit';
import type { LayoutServerLoad } from './$types.js';

export const load: LayoutServerLoad = async ({ cookies }) => {
	if (process.env.PUBLIC_STATIC === 'true') {
		return { learnerId: null };
	}

	const learnerId = cookies.get('wid');
	if (!learnerId) {
		redirect(302, '/');
	}
	return { learnerId };
};

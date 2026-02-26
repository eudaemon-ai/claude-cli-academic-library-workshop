import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types.js';
import { loadAllModules } from '$lib/content/loader.js';

export const GET: RequestHandler = async () => {
	const modules = loadAllModules();
	return json({ modules });
};

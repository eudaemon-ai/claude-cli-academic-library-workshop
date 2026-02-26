import type { PageServerLoad } from './$types.js';
import { error } from '@sveltejs/kit';
import { getLearnersByCohort, getLearnerProgress } from '$lib/db/queries.js';

export const prerender = false;
import { loadAllModules, loadExercise } from '$lib/content/loader.js';

export const load: PageServerLoad = async ({ url }) => {
	const token = url.searchParams.get('token');
	if (!token || token !== process.env.FACILITATOR_TOKEN) {
		error(403, 'Facilitator token required. Add ?token=... to the URL.');
	}

	const cohort = process.env.PUBLIC_COHORT ?? 'default';
	const allModules = loadAllModules();

	// Load all learners in the cohort
	const learnerItems = await getLearnersByCohort(cohort);

	// Load progress for each learner in parallel
	const progressByLearner = await Promise.all(
		learnerItems.map(async (l) => ({
			learnerId: l.id,
			steps: await getLearnerProgress(l.id)
		}))
	);

	const now = Date.now();

	// Build learner rows with status
	const learnerRows = learnerItems.map((l) => {
		const prog = progressByLearner.find((p) => p.learnerId === l.id)?.steps ?? [];
		const stepsCompleted = prog.length;
		const lastActivity = new Date(l.lastSeen).getTime();
		const minutesSince = (now - lastActivity) / 60000;

		// Find the furthest exercise reached (by module index × 100 + exercise index)
		let maxScore = -1;
		let currentModule = '';
		let currentExercise = '';
		for (const p of prog) {
			const mIdx = allModules.findIndex((m) => m.id === p.moduleId);
			const mod = allModules[mIdx];
			if (!mod) continue;
			const eIdx = mod.exercises.findIndex((e) => e.id === p.exerciseId);
			const score = mIdx * 100 + eIdx;
			if (score > maxScore) {
				maxScore = score;
				currentModule = p.moduleId;
				currentExercise = p.exerciseId;
			}
		}

		return {
			id: l.id,
			name: l.name,
			role: l.role,
			lastSeen: l.lastSeen,
			currentModule,
			currentExercise,
			stepsCompleted,
			maxScore,
			status: minutesSince > 10 ? 'inactive' : 'on-pace' // slow is computed after median
		};
	});

	// Compute median position score
	const scores = learnerRows.map((r) => r.maxScore).filter((s) => s >= 0).sort((a, b) => a - b);
	const median =
		scores.length > 0 ? scores[Math.floor(scores.length / 2)] : -1;

	// Mark learners as slow if they're 2+ exercises behind median
	const behindCount = learnerRows.filter(
		(r) => r.status !== 'inactive' && r.maxScore < median - 1
	).length;

	const learners = learnerRows.map((r) => ({
		...r,
		status: (
			r.status === 'inactive'
				? 'inactive'
				: r.maxScore < median - 1
					? 'slow'
					: 'on-pace'
		) as 'inactive' | 'slow' | 'on-pace'
	}));

	// Build heatmap cells
	const heatmapCells = allModules.flatMap((mod, mIdx) =>
		mod.exercises.map((ex, eIdx) => ({
			moduleId: mod.id,
			moduleTitle: mod.title,
			exerciseId: ex.id,
			exerciseTitle: ex.title,
			reachedCount: learnerRows.filter((r) => r.maxScore >= mIdx * 100 + eIdx).length,
			totalLearners: learnerItems.length
		}))
	);

	// Find median exercise for talking points
	const medianMIdx = Math.floor(median / 100);
	const medianEIdx = median % 100;
	const medianModule = allModules[medianMIdx];
	const medianExercise = medianModule?.exercises[medianEIdx];

	let talkingPoints: { stepLabel: string; exerciseTitle: string; note: string }[] = [];
	if (medianModule && medianExercise) {
		try {
			const ex = loadExercise(medianModule.id, medianExercise.id);
			talkingPoints = ex.steps
				.filter((s) => s.facilitator_note)
				.map((s) => ({
					stepLabel: s.label,
					exerciseTitle: ex.title,
					note: s.facilitator_note!
				}));
		} catch {
			// content file not found — skip
		}
	}

	const medianLabel = medianExercise
		? `${medianModule?.title} / ${medianExercise.title}`
		: 'No data yet';

	return {
		learners,
		heatmapCells,
		talkingPoints,
		behindCount,
		medianLabel,
		totalLearners: learnerItems.length,
		cohort,
		token
	};
};

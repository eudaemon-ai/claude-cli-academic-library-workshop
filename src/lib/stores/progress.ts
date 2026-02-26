import type { StepKey } from '$lib/content/types.js';

// Client-side progress cache using Svelte 5 runes.
// Updated after each successful POST /api/progress call.

export let completedSteps = $state<StepKey[]>([]);

export function addCompletedStep(step: StepKey) {
	completedSteps.push(step);
}

export function isStepComplete(moduleId: string, exerciseId: string, stepIndex: number): boolean {
	return completedSteps.some(
		(s) => s.moduleId === moduleId && s.exerciseId === exerciseId && s.stepIndex === stepIndex
	);
}

export function getExerciseCompletedCount(moduleId: string, exerciseId: string): number {
	return completedSteps.filter((s) => s.moduleId === moduleId && s.exerciseId === exerciseId)
		.length;
}

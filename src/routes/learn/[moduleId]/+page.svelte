<script lang="ts">
	import Sidebar from '$lib/components/layout/Sidebar.svelte';
	import ProgressBar from '$lib/components/layout/ProgressBar.svelte';
	import { base } from '$app/paths';

	let { data } = $props();
	const module = $derived(data.module);
	const completedExerciseIds = $derived(data.completedExerciseIds);

	const totalSteps = $derived(module.exercises.reduce((s, ex) => s + (ex.steps?.length ?? 0), 0));
	const doneSteps = $derived(data.completedSteps.length);
	const pct = $derived(totalSteps > 0 ? (doneSteps / totalSteps) * 100 : 0);

	// Mirror the card's color maps exactly
	const topBarColors: Record<string, string> = {
		'01-reference': '#002D72',
		'02-cataloging': '#1265A8',
		'03-collection-dev': '#F0B323',
		'04-leadership': '#4338ca'
	};
	const accentColors: Record<string, string> = {
		'01-reference': '#002D72',
		'02-cataloging': '#1265A8',
		'03-collection-dev': '#D4870A',
		'04-leadership': '#3730a3'
	};

	const topBarColor = $derived(topBarColors[module.id] ?? '#002D72');
	const accentColor = $derived(accentColors[module.id] ?? '#002D72');

	let sidebarOpen = $state(false);
</script>

<div class="flex">
	<Sidebar
		moduleId={module.id}
		moduleTitle={module.title}
		exercises={module.exercises}
		currentExerciseId=""
		{completedExerciseIds}
		open={sidebarOpen}
		onClose={() => (sidebarOpen = false)}
	/>

	<div class="flex-1 overflow-y-auto">
		<!-- Module accent bar — mirrors the card's top color strip -->
		<div class="h-1.5 w-full" style="background-color: {topBarColor}"></div>

		<div class="mx-auto max-w-2xl px-5 py-8 sm:px-10 sm:py-10">
			<!-- Mobile sidebar toggle -->
			<div class="mb-5 flex items-center justify-between md:hidden">
				<span class="text-xs font-medium uppercase tracking-wider text-gray-400">Module</span>
				<button
					onclick={() => (sidebarOpen = true)}
					class="flex items-center gap-1.5 rounded-lg border border-gray-200 bg-white px-3 py-1.5 text-xs text-gray-600 shadow-sm hover:bg-gray-50"
					aria-label="Open exercise navigation"
				>
					<svg viewBox="0 0 16 16" fill="currentColor" class="h-3.5 w-3.5" aria-hidden="true">
						<path fill-rule="evenodd" d="M2 3.75A.75.75 0 0 1 2.75 3h10.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 3.75zm0 4.083A.75.75 0 0 1 2.75 7h7.5a.75.75 0 0 1 0 1.5h-7.5A.75.75 0 0 1 2 7.833zm0 4A.75.75 0 0 1 2.75 11h5.5a.75.75 0 0 1 0 1.5h-5.5A.75.75 0 0 1 2 11.833z" clip-rule="evenodd"/>
					</svg>
					Exercises
				</button>
			</div>

			{#if pct >= 100}
				<div class="mb-6 flex items-center gap-2.5 rounded-lg border border-green-200 bg-green-50 px-4 py-2.5 text-sm text-green-700">
					<svg viewBox="0 0 16 16" fill="currentColor" class="h-4 w-4 shrink-0" aria-hidden="true">
						<path d="M8 1a7 7 0 1 0 0 14A7 7 0 0 0 8 1zm3.354 5.146a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708 0l-2-2a.5.5 0 1 1 .708-.708L7 9.793l3.646-3.647a.5.5 0 0 1 .708 0z"/>
					</svg>
					All exercises complete — well done.
				</div>
			{/if}

			<div class="mb-8 border-b border-gray-200 pb-6">
				<h1
					class="font-serif text-2xl font-bold leading-snug"
					style="color: {accentColor}"
				>{module.title}</h1>
				<p class="mt-2 text-[0.9375rem] leading-relaxed text-gray-500">{module.tagline}</p>
				<div class="mt-4">
					<ProgressBar value={pct} label="Module progress" color={accentColor} />
				</div>
			</div>

			<div class="prose max-w-none text-gray-700">
				{@html module.body}
			</div>

			{#if module.exercises.length > 0}
				{@const resumeExercise = module.exercises.find((ex) => !completedExerciseIds.includes(ex.id)) ?? module.exercises[0]}
				<div class="mt-10">
					<a
						href="{base}/learn/{module.id}/{resumeExercise.id}"
						class="inline-flex items-center gap-2 rounded-lg px-6 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
						style="background-color: {accentColor}"
					>
						{pct >= 100 ? 'Review Module' : completedExerciseIds.length > 0 ? 'Continue' : 'Start First Exercise'} →
					</a>
				</div>
			{/if}
		</div>
	</div>
</div>

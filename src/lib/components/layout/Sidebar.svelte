<script lang="ts">
	import type { ExerciseMeta } from '$lib/content/types.js';
	import { base } from '$app/paths';

	let {
		moduleId,
		moduleTitle,
		exercises,
		currentExerciseId,
		completedExerciseIds,
		open = false,
		onClose
	}: {
		moduleId: string;
		moduleTitle: string;
		exercises: ExerciseMeta[];
		currentExerciseId: string;
		completedExerciseIds: string[];
		open?: boolean;
		onClose?: () => void;
	} = $props();

	const isOnOverview = $derived(currentExerciseId === '');
</script>

<!-- Mobile backdrop — z-index below AppNav so the top bar stays on top -->
{#if open}
	<div
		class="fixed inset-0 z-10 bg-black/40 md:hidden"
		onclick={onClose}
		aria-hidden="true"
	></div>
{/if}

<aside
	class="fixed inset-y-0 left-0 z-20 flex w-64 flex-col border-r border-gray-200 bg-slate-50 px-3 py-6
		transition-transform duration-300 ease-in-out
		{open ? 'translate-x-0' : '-translate-x-full'}
		md:static md:w-60 md:min-h-[calc(100vh-3.5rem)] md:shrink-0 md:translate-x-0 md:transition-none"
>
	<!-- Mobile close button -->
	<div class="mb-2 flex justify-end md:hidden">
		<button
			onclick={onClose}
			class="rounded-md p-1.5 text-gray-400 hover:bg-gray-100 hover:text-gray-600"
			aria-label="Close navigation"
		>
			<svg viewBox="0 0 16 16" fill="currentColor" class="h-4 w-4" aria-hidden="true">
				<path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854z"/>
			</svg>
		</button>
	</div>

	<div class="flex-1 overflow-y-auto">
		<!-- Module overview entry -->
		<a
			href="{base}/learn/{moduleId}"
			onclick={onClose}
			class="flex items-center gap-3 rounded-lg px-3 py-2.5 text-[0.8125rem] leading-snug transition-colors
				{isOnOverview
				? 'bg-jhu-blue/8 font-semibold text-jhu-blue'
				: 'text-gray-600 hover:bg-gray-100'}"
		>
			<span
				class="flex h-5 w-5 shrink-0 items-center justify-center rounded-full
					{isOnOverview ? 'bg-jhu-blue text-white' : 'bg-gray-200 text-gray-500'}"
			>
				<svg viewBox="0 0 16 16" fill="currentColor" class="h-3 w-3" aria-hidden="true">
					<path d="M1 2.5A2.5 2.5 0 0 1 3.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5H12v-2h-8a1 1 0 0 0-.717 1.7.75.75 0 1 1-1.071 1.05A2.495 2.495 0 0 1 1 11.5v-9zm3.5 11h8v-10H3.5a1 1 0 0 0-1 1v9.004z"/>
				</svg>
			</span>
			<span class="truncate">{moduleTitle}</span>
		</a>

		<div class="my-3 border-t border-gray-200"></div>

		<p class="mb-3 px-3 text-[10px] font-semibold uppercase tracking-wider text-gray-400">Exercises</p>
		<nav class="space-y-0.5">
			{#each exercises as ex, i}
				{@const isComplete = completedExerciseIds.includes(ex.id)}
				{@const isCurrent = ex.id === currentExerciseId}
				<a
					href="{base}/learn/{moduleId}/{ex.id}"
					onclick={onClose}
					class="flex items-center gap-3 rounded-lg px-3 py-2.5 text-[0.8125rem] leading-snug transition-colors
						{isCurrent
						? 'bg-jhu-blue/8 font-semibold text-jhu-blue'
						: isComplete
							? 'text-gray-600 hover:bg-gray-100'
							: 'text-gray-400 hover:bg-gray-100'}"
				>
					<span
						class="flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-bold tabular-nums
						{isComplete
							? 'bg-green-500 text-white'
							: isCurrent
								? 'bg-jhu-blue text-white'
								: 'bg-gray-200 text-gray-500'}"
					>
						{isComplete ? '✓' : i + 1}
					</span>
					<span class="truncate">{ex.title}</span>
					{#if ex.estimated_minutes}
						<span class="ml-auto shrink-0 text-[11px] tabular-nums text-gray-400">{ex.estimated_minutes}m</span>
					{/if}
				</a>
			{/each}
		</nav>
	</div>

	<!-- Back to all modules -->
	<div class="mt-6 border-t border-gray-200 pt-4">
		<a
			href="{base}/"
			onclick={onClose}
			class="flex items-center gap-2 rounded-lg px-3 py-2 text-[0.8125rem] text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-600"
		>
			<svg viewBox="0 0 16 16" fill="currentColor" class="h-3.5 w-3.5 shrink-0" aria-hidden="true">
				<path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
			</svg>
			All Modules
		</a>
	</div>
</aside>

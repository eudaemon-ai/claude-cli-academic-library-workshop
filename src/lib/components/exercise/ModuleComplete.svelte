<script lang="ts">
	import { goto } from '$app/navigation';
	import type { ExerciseMeta } from '$lib/content/types.js';

	let {
		moduleTitle,
		moduleId,
		exercises,
		accentColor
	}: {
		moduleTitle: string;
		moduleId: string;
		exercises: ExerciseMeta[];
		accentColor: string;
	} = $props();
</script>

<div class="flex min-h-[80vh] flex-col items-center justify-center px-6 py-16 text-center">
	<!-- Completion icon -->
	<div
		class="mb-6 flex h-16 w-16 items-center justify-center rounded-full"
		style="background-color: {accentColor}18"
	>
		<svg
			viewBox="0 0 24 24"
			fill="none"
			stroke-width="2.5"
			stroke-linecap="round"
			stroke-linejoin="round"
			class="h-8 w-8"
			style="stroke: {accentColor}"
			aria-hidden="true"
		>
			<path d="M20 6 9 17l-5-5" />
		</svg>
	</div>

	<p class="mb-1 text-xs font-semibold uppercase tracking-widest" style="color: {accentColor}">
		Module Complete
	</p>
	<h2 class="mb-2 font-serif text-3xl font-bold tracking-tight text-gray-900">{moduleTitle}</h2>
	<p class="mb-8 max-w-sm text-[0.9375rem] leading-relaxed text-gray-500">
		You've finished all {exercises.length} exercises. Take a moment to reflect on what you've learned before moving on.
	</p>

	<!-- Exercise checklist -->
	<div class="mb-8 w-full max-w-sm rounded-xl border border-gray-200 bg-white px-6 py-4 text-left shadow-sm">
		<p class="mb-3 text-[11px] font-semibold uppercase tracking-wider text-gray-400">What you covered</p>
		<ul class="space-y-2.5">
			{#each exercises as ex, i}
				<li class="flex items-center gap-3 text-sm text-gray-700">
					<span
						class="flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] font-bold text-white"
						style="background-color: {accentColor}"
					>✓</span>
					<span>{ex.title}</span>
				</li>
			{/each}
		</ul>
	</div>

	<!-- CTAs -->
	<div class="flex flex-col items-center gap-3 sm:flex-row">
		<button
			onclick={() => goto(`/learn/${moduleId}`)}
			class="rounded-xl px-8 py-2.5 text-sm font-medium text-white transition-opacity hover:opacity-90"
			style="background-color: {accentColor}"
		>
			View Module Summary
		</button>
		<a
			href="/"
			class="rounded-xl border border-gray-200 bg-white px-8 py-2.5 text-sm font-medium text-gray-600 hover:bg-gray-50"
		>
			← All Modules
		</a>
	</div>
</div>

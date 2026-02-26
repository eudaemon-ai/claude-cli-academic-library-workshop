<script lang="ts">
	import type { ModuleMeta } from '$lib/content/types.js';
	import { base } from '$app/paths';

	let {
		module,
		completedSteps,
		totalSteps,
		currentExerciseNum = null
	}: {
		module: ModuleMeta;
		completedSteps: number;
		totalSteps: number;
		currentExerciseNum?: number | null;
	} = $props();

	const pct = $derived(totalSteps > 0 ? (completedSteps / totalSteps) * 100 : 0);
	const circumference = 2 * Math.PI * 20; // r=20
	const dashOffset = $derived(circumference - (pct / 100) * circumference);

	// JHU-branded module colors
	const accentColors: Record<string, string> = {
		'01-reference': 'border-blue-950/25 hover:border-blue-950/60',
		'02-cataloging': 'border-blue-300/60 hover:border-blue-500',
		'03-collection-dev': 'border-amber-300/60 hover:border-amber-500',
		'04-leadership': 'border-indigo-200/60 hover:border-indigo-400'
	};
	const ringColors: Record<string, string> = {
		'01-reference': '#002D72',
		'02-cataloging': '#1265A8',
		'03-collection-dev': '#D4870A',
		'04-leadership': '#3730a3'
	};
	const badgeColors: Record<string, string> = {
		'01-reference': 'bg-blue-950/8 text-blue-950',
		'02-cataloging': 'bg-blue-100 text-blue-800',
		'03-collection-dev': 'bg-amber-100 text-amber-800',
		'04-leadership': 'bg-indigo-100 text-indigo-800'
	};
	const topBarColors: Record<string, string> = {
		'01-reference': '#002D72',
		'02-cataloging': '#1265A8',
		'03-collection-dev': '#F0B323',
		'04-leadership': '#4338ca'
	};

	const ringColor = ringColors[module.id] ?? '#002D72';
	const accent = accentColors[module.id] ?? 'border-gray-200 hover:border-gray-400';
	const badge = badgeColors[module.id] ?? 'bg-gray-100 text-gray-700';
	const topBarColor = topBarColors[module.id] ?? '#002D72';

	const buttonLabel = $derived(
		completedSteps === 0 ? 'Start Module' : pct >= 100 ? 'Review Module' : 'Continue'
	);

	function formatTag(tag: string): string {
		return tag.replace(/_/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
	}
</script>

<a
	href="{base}/learn/{module.id}"
	class="group flex flex-col overflow-hidden rounded-xl border-2 bg-white shadow-sm transition-all hover:shadow-md {accent}"
>
	<!-- Colored top accent bar -->
	<div class="h-1.5 w-full" style="background-color: {topBarColor}"></div>

	<div class="flex flex-col p-5">
		<!-- Title row with progress ring -->
		<div class="flex items-start gap-3">
			<div class="min-w-0 flex-1">
				<h2 class="font-serif text-[1.0625rem] font-bold leading-snug text-gray-900">
					{module.title}
				</h2>
				<p class="mt-1.5 text-[0.8125rem] leading-relaxed text-gray-500">{module.tagline}</p>
			</div>

			<!-- Progress ring -->
			<div class="shrink-0 pt-0.5">
				<svg width="48" height="48" viewBox="0 0 52 52" aria-hidden="true">
					<circle cx="26" cy="26" r="20" fill="none" stroke="#e5e7eb" stroke-width="4" />
					<circle
						cx="26"
						cy="26"
						r="20"
						fill="none"
						stroke={ringColor}
						stroke-width="4"
						stroke-dasharray={circumference}
						stroke-dashoffset={dashOffset}
						stroke-linecap="round"
						transform="rotate(-90 26 26)"
						style="transition: stroke-dashoffset 0.5s ease"
					/>
					<text x="26" y="31" text-anchor="middle" font-size="11" font-weight="600" fill={ringColor}>
						{Math.round(pct)}%
					</text>
				</svg>
			</div>
		</div>

		<!-- Role tags -->
		<div class="mt-3 flex flex-wrap gap-1.5">
			{#each module.role_tags as tag}
				<span class="rounded-full px-2.5 py-0.5 text-[11px] font-medium tracking-wide {badge}">
					{formatTag(tag)}
				</span>
			{/each}
		</div>

		<!-- Bottom row -->
		<div class="mt-4 flex items-center justify-between border-t border-gray-100 pt-3.5">
			{#if currentExerciseNum && pct < 100}
				<span class="text-xs text-gray-500">
					Exercise {currentExerciseNum} of {module.exercises.length}
				</span>
			{:else}
				<span class="text-xs text-gray-400">
					{module.exercises.length} exercises · {module.estimated_minutes} min
				</span>
			{/if}
			<span
				class="inline-flex items-center gap-1.5 rounded-full px-3.5 py-1.5 text-xs font-semibold text-white shadow-sm transition-all duration-150 group-hover:gap-2.5 group-hover:shadow"
				style="background-color: {topBarColor}"
			>
				{buttonLabel}<span class="transition-transform duration-150 group-hover:translate-x-px" aria-hidden="true">→</span>
			</span>
		</div>
	</div>
</a>

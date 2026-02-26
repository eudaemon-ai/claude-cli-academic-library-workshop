<script lang="ts">
	import type { Step } from '$lib/content/types.js';
	import type { Snippet } from 'svelte';

	let {
		step,
		isComplete,
		isActive,
		children
	}: {
		step: Step;
		isComplete: boolean;
		isActive: boolean;
		children: Snippet;
	} = $props();
</script>

<div
	class="rounded-xl border p-6 transition-all
		{isComplete
		? 'border-green-200 bg-green-50/40'
		: isActive
			? 'border-jhu-blue/40 bg-white shadow-sm ring-1 ring-jhu-blue/10'
			: 'border-gray-200 bg-white opacity-50'}"
>
	<div class="mb-5 flex items-center gap-3">
		<span
			class="flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold tabular-nums
			{isComplete
				? 'bg-green-500 text-white'
				: isActive
					? 'bg-jhu-blue text-white'
					: 'bg-gray-200 text-gray-500'}"
		>
			{isComplete ? '✓' : step.index + 1}
		</span>
		<h3 class="text-[0.9375rem] font-semibold leading-snug tracking-tight
			{isActive ? 'text-gray-900' : isComplete ? 'text-gray-600' : 'text-gray-400'}">
			{step.label}
		</h3>
		{#if !isActive && !isComplete}
			<span class="ml-auto text-xs text-gray-400">Locked</span>
		{/if}
	</div>

	{#if isActive || isComplete}
		{@render children()}
	{/if}
</div>

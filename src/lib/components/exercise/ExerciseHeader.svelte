<script lang="ts">
	let {
		title,
		currentStep,
		totalSteps,
		estimatedMinutes
	}: {
		title: string;
		currentStep: number;
		totalSteps: number;
		estimatedMinutes: number;
	} = $props();

	const pct = $derived(totalSteps > 0 ? (currentStep / totalSteps) * 100 : 0);
</script>

<div class="mb-8 pb-6 border-b border-gray-200">
	<h1 class="font-serif text-2xl font-bold leading-snug text-jhu-blue">{title}</h1>

	<div class="mt-4 flex items-center gap-3">
		<div class="h-1 flex-1 rounded-full bg-gray-200">
			<div
				class="h-1 rounded-full bg-jhu-blue transition-all duration-300"
				style="width: {pct}%"
			></div>
		</div>
		<span class="text-xs tabular-nums text-gray-400">{currentStep}/{totalSteps} steps</span>
		<span class="text-xs text-gray-400">·</span>
		<span class="text-xs text-gray-400">~{estimatedMinutes} min</span>
	</div>
</div>

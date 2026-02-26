<script lang="ts">
	import { onMount } from 'svelte';
	import { invalidate } from '$app/navigation';
	import PacingAlert from '$lib/components/facilitator/PacingAlert.svelte';
	import CohortProgressTable from '$lib/components/facilitator/CohortProgressTable.svelte';
	import ModuleHeatmap from '$lib/components/facilitator/ModuleHeatmap.svelte';
	import TalkingPoints from '$lib/components/facilitator/TalkingPoints.svelte';

	let { data } = $props();
	let alertDismissed = $state(false);

	onMount(() => {
		const interval = setInterval(() => invalidate('app:cohort'), 30_000);
		return () => clearInterval(interval);
	});
</script>

<div class="mx-auto max-w-7xl px-4 py-8">
	<div class="mb-6 flex items-center justify-between">
		<div>
			<h1 class="text-2xl font-bold text-gray-900">Facilitator Dashboard</h1>
			<p class="text-sm text-gray-500">Cohort: {data.cohort} · {data.totalLearners} learners</p>
		</div>
		<span class="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-700">
			Live · refreshes every 30s
		</span>
	</div>

	{#if !alertDismissed}
		<PacingAlert
			behindCount={data.behindCount}
			medianLabel={data.medianLabel}
			onDismiss={() => (alertDismissed = true)}
		/>
	{/if}

	<div class="grid gap-6 lg:grid-cols-3">
		<div class="lg:col-span-2">
			<ModuleHeatmap cells={data.heatmapCells} totalLearners={data.totalLearners} />
		</div>
		<div>
			<TalkingPoints points={data.talkingPoints} />
		</div>
	</div>

	<div class="mt-6">
		<CohortProgressTable learners={data.learners} />
	</div>
</div>

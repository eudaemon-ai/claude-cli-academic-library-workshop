<script lang="ts">
	interface TalkingPoint {
		stepLabel: string;
		exerciseTitle: string;
		note: string;
	}

	let { points }: { points: TalkingPoint[] } = $props();

	let openIndex = $state<number | null>(null);
</script>

<div class="rounded-xl border border-gray-200 bg-white p-6">
	<h3 class="mb-4 text-sm font-semibold text-gray-700">Talking Points</h3>
	{#if points.length === 0}
		<p class="text-sm text-gray-400">
			No facilitator notes for the current majority exercise. Talking points appear here when
			the exercise that most learners are on contains step-level guidance in the content files.
		</p>
	{:else}
		<div class="space-y-2">
			{#each points as point, i}
				<div class="rounded-lg border border-gray-100 bg-gray-50">
					<button
						onclick={() => (openIndex = openIndex === i ? null : i)}
						class="flex w-full items-center justify-between px-4 py-3 text-left text-sm font-medium text-gray-700"
					>
						<span>
							<span class="mr-2 text-gray-400">{point.exerciseTitle} —</span>
							{point.stepLabel}
						</span>
						<span class="text-gray-400">{openIndex === i ? '▲' : '▼'}</span>
					</button>
					{#if openIndex === i}
						<div class="border-t border-gray-100 px-4 py-3">
							<p class="text-sm text-gray-600 italic">{point.note}</p>
						</div>
					{/if}
				</div>
			{/each}
		</div>
	{/if}
</div>

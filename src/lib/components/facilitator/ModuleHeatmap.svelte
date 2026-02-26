<script lang="ts">
	interface Cell {
		moduleId: string;
		moduleTitle: string;
		exerciseId: string;
		exerciseTitle: string;
		reachedCount: number;
		totalLearners: number;
	}

	let { cells, totalLearners }: { cells: Cell[]; totalLearners: number } = $props();

	// Group cells by module
	const byModule = $derived(
		cells.reduce<Record<string, Cell[]>>((acc, cell) => {
			if (!acc[cell.moduleId]) acc[cell.moduleId] = [];
			acc[cell.moduleId].push(cell);
			return acc;
		}, {})
	);

	function opacity(reached: number, total: number): string {
		if (total === 0) return '0.05';
		return Math.max(0.1, reached / total).toFixed(2);
	}
</script>

<div class="rounded-xl border border-gray-200 bg-white p-6">
	<h3 class="mb-4 text-sm font-semibold text-gray-700">Module Progress Heatmap</h3>
	<div class="space-y-4">
		{#each Object.entries(byModule) as [modId, modCells]}
			<div>
				<p class="mb-2 text-xs font-medium text-gray-500">{modCells[0].moduleTitle}</p>
				<div class="flex gap-2">
					{#each modCells as cell}
						<div
							class="group relative flex-1 rounded-lg bg-blue-600 px-2 py-3 text-center"
							style="opacity: {opacity(cell.reachedCount, totalLearners)}"
							title="{cell.exerciseTitle}: {cell.reachedCount}/{totalLearners} learners"
						>
							<span class="text-xs font-medium text-white">{cell.reachedCount}</span>
							<div class="pointer-events-none absolute -top-8 left-1/2 hidden -translate-x-1/2 whitespace-nowrap rounded bg-gray-900 px-2 py-1 text-xs text-white group-hover:block">
								{cell.exerciseTitle}
							</div>
						</div>
					{/each}
				</div>
			</div>
		{/each}
	</div>
	<p class="mt-3 text-xs text-gray-400">Cell color = proportion of learners who reached each exercise</p>
</div>

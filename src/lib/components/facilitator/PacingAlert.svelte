<script lang="ts">
	let {
		behindCount,
		medianLabel,
		onDismiss
	}: {
		behindCount: number;
		medianLabel: string;
		onDismiss: () => void;
	} = $props();
</script>

{#if behindCount > 0}
	<div class="mb-4 flex items-start justify-between rounded-lg border border-amber-200 bg-amber-50 px-4 py-3">
		<div class="flex items-start gap-3">
			<span class="mt-0.5 text-amber-600">⚠</span>
			<p class="text-sm text-amber-800">
				<strong>{behindCount} learner{behindCount > 1 ? 's are' : ' is'}</strong> more than one exercise
				behind the cohort median ({medianLabel}). Consider pausing for a group sync.
			</p>
		</div>
		<button onclick={onDismiss} class="ml-4 text-amber-500 hover:text-amber-700" aria-label="Dismiss">
			✕
		</button>
	</div>
{/if}

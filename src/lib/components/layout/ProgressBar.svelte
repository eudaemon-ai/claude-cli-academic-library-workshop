<script lang="ts">
	let { value, label = '', color = '#2563eb' }: { value: number; label?: string; color?: string } = $props();
	// value: 0–100
	const pct = $derived(Math.min(100, Math.max(0, value)));
</script>

<div class="w-full">
	{#if label}
		<div class="mb-1 flex justify-between text-xs text-gray-500">
			<span>{label}</span>
			<span>{Math.round(pct)}%</span>
		</div>
	{/if}
	<div class="h-2 w-full rounded-full bg-gray-200">
		<div
			class="h-2 rounded-full transition-all duration-300"
			style="width: {pct}%; background-color: {color}"
			role="progressbar"
			aria-valuenow={pct}
			aria-valuemin={0}
			aria-valuemax={100}
		></div>
	</div>
</div>

<script lang="ts">
	let { text }: { text: string } = $props();
</script>

<div class="mt-4 flex items-start gap-3 rounded-lg border border-green-200 bg-green-50 px-4 py-3">
	<span class="mt-0.5 text-green-600">✓</span>
	<div>
		<p class="text-sm font-medium text-green-800">Checkpoint</p>
		<p class="mt-0.5 text-sm text-green-700">{text}</p>
	</div>
</div>

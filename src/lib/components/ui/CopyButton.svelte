<script lang="ts">
	let { text }: { text: string } = $props();

	let copied = $state(false);

	async function copy() {
		await navigator.clipboard.writeText(text);
		copied = true;
		setTimeout(() => (copied = false), 2000);
	}
</script>

<button
	onclick={copy}
	class="rounded px-2 py-1 text-xs font-medium transition-colors
		{copied
		? 'bg-green-100 text-green-700'
		: 'bg-gray-100 text-gray-600 hover:bg-gray-200'}"
	title="Copy to clipboard"
>
	{copied ? '✓ Copied' : 'Copy'}
</button>

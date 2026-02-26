<script lang="ts">
	import type { Snippet } from 'svelte';

	let {
		open = $bindable(false),
		title,
		children
	}: {
		open: boolean;
		title: string;
		children: Snippet;
	} = $props();
</script>

{#if open}
	<div class="fixed inset-0 z-50 flex items-center justify-center">
		<div class="absolute inset-0 bg-black/50" role="presentation"></div>
		<div class="relative z-10 w-full max-w-md rounded-xl bg-white p-8 shadow-2xl">
			<h2 class="mb-4 text-xl font-semibold text-gray-900">{title}</h2>
			{@render children()}
		</div>
	</div>
{/if}

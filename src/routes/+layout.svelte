<script lang="ts">
	import '../app.css';
	import AppNav from '$lib/components/layout/AppNav.svelte';
	import type { Snippet } from 'svelte';
	import type { ModuleMeta } from '$lib/content/types.js';

	let {
		data,
		children
	}: {
		data: { modules: ModuleMeta[]; learner: { name: string } | null };
		children: Snippet;
	} = $props();
</script>

<svelte:head>
	<title>{import.meta.env.PUBLIC_WORKSHOP_TITLE ?? 'Library AI Workshop'}</title>
</svelte:head>

<div class="min-h-screen bg-slate-50 flex flex-col">
	<AppNav modules={data.modules} learnerName={data.learner?.name ?? null} />
	<main class="flex-1">
		{@render children()}
	</main>
	<footer class="border-t border-gray-200 bg-white py-4 text-center text-xs text-gray-400">
		&copy; {new Date().getFullYear()} Steven J. Miklovic. All rights reserved.
	</footer>
</div>

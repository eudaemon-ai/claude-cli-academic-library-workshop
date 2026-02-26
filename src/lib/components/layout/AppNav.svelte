<script lang="ts">
	import { page } from '$app/state';
	import { invalidateAll } from '$app/navigation';
	import { base } from '$app/paths';
	import type { ModuleMeta } from '$lib/content/types.js';

	let {
		modules,
		learnerName
	}: {
		modules: ModuleMeta[];
		learnerName: string | null;
	} = $props();

	const workshopTitle = import.meta.env.PUBLIC_WORKSHOP_TITLE ?? 'Library AI Workshop';

	const moduleColors: Record<string, string> = {
		'01-reference': 'text-white',
		'02-cataloging': 'text-jhu-spirit',
		'03-collection-dev': 'text-jhu-gold',
		'04-leadership': 'text-indigo-300'
	};

	const currentModuleId = $derived(
		modules.find((m) => page.url.pathname.startsWith(`/learn/${m.id}`))?.id ?? ''
	);

	let menuOpen = $state(false);
	let editing = $state(false);
	let editValue = $state('');
	let saving = $state(false);

	// Close mobile menu on navigation
	$effect(() => {
		page.url.pathname;
		menuOpen = false;
	});

	function startEdit() {
		editValue = learnerName ?? '';
		editing = true;
	}

	async function saveName(e: SubmitEvent) {
		e.preventDefault();
		if (!editValue.trim()) return;
		saving = true;
		await fetch('/api/session', {
			method: 'PATCH',
			headers: { 'content-type': 'application/json' },
			body: JSON.stringify({ name: editValue.trim() })
		});
		saving = false;
		editing = false;
		await invalidateAll();
	}
</script>

<nav class="relative sticky top-0 z-30 border-b border-blue-950 bg-jhu-blue shadow-md">
	<div class="mx-auto flex max-w-7xl items-center justify-between px-6 py-3.5">
		<a href="{base}/" class="flex items-center gap-3 text-white">
			<span class="font-serif text-sm font-bold tracking-wide text-jhu-gold">JHU</span>
			<span class="h-4 w-px bg-white/30"></span>
			<span class="text-sm font-medium tracking-wide">{workshopTitle}</span>
		</a>

		<!-- Desktop module links -->
		<div class="hidden items-center gap-6 md:flex">
			{#each modules as mod}
				<a
					href="{base}/learn/{mod.id}"
					class="border-b-2 pb-0.5 text-sm font-medium transition-colors {currentModuleId === mod.id
						? 'border-current ' + (moduleColors[mod.id] ?? 'text-white')
						: 'border-transparent text-white/70 hover:text-white'}"
				>
					{mod.title}
				</a>
			{/each}
		</div>

		<div class="flex items-center gap-3">
			<!-- Learner name / edit (desktop) -->
			{#if learnerName}
				{#if editing}
					<form onsubmit={saveName} class="hidden items-center gap-2 md:flex">
						<input
							bind:value={editValue}
							class="w-32 rounded-full bg-white/10 px-3 py-1 text-sm text-white/90 outline-none ring-1 ring-white/30 focus:ring-white/60"
							disabled={saving}
							autofocus
						/>
						<button
							type="submit"
							disabled={saving}
							class="text-sm text-white/70 hover:text-white disabled:opacity-40"
						>{saving ? '…' : 'Save'}</button>
						<button
							type="button"
							onclick={() => (editing = false)}
							class="text-sm text-white/40 hover:text-white/70"
							aria-label="Cancel"
						>✕</button>
					</form>
				{:else}
					<button
						onclick={startEdit}
						class="group hidden items-center gap-1.5 rounded-full bg-white/10 px-3 py-1 text-sm text-white/80 transition-colors hover:bg-white/15 md:flex"
					>
						{learnerName}
						<svg viewBox="0 0 12 12" fill="currentColor" class="h-2.5 w-2.5 opacity-0 transition-opacity group-hover:opacity-50" aria-hidden="true">
							<path d="M8.586.586a2 2 0 0 1 2.828 2.828L3.914 11H1v-2.914L8.586.586z"/>
						</svg>
					</button>
				{/if}
			{/if}

			<!-- Mobile hamburger -->
			<button
				class="flex h-8 w-8 items-center justify-center rounded text-white/80 transition-colors hover:bg-white/10 hover:text-white md:hidden"
				onclick={() => (menuOpen = !menuOpen)}
				aria-label={menuOpen ? 'Close menu' : 'Open menu'}
				aria-expanded={menuOpen}
			>
				{#if menuOpen}
					<svg viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5" aria-hidden="true">
						<path d="M6.28 5.22a.75.75 0 0 0-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 1 0 1.06 1.06L10 11.06l3.72 3.72a.75.75 0 1 0 1.06-1.06L11.06 10l3.72-3.72a.75.75 0 0 0-1.06-1.06L10 8.94 6.28 5.22z"/>
					</svg>
				{:else}
					<svg viewBox="0 0 20 20" fill="currentColor" class="h-5 w-5" aria-hidden="true">
						<path fill-rule="evenodd" d="M2 4.75A.75.75 0 0 1 2.75 4h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 4.75zm0 10.5a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1-.75-.75zM2 10a.75.75 0 0 1 .75-.75h14.5a.75.75 0 0 1 0 1.5H2.75A.75.75 0 0 1 2 10z" clip-rule="evenodd"/>
					</svg>
				{/if}
			</button>
		</div>
	</div>

	<!-- Mobile menu dropdown -->
	{#if menuOpen}
		<div class="absolute inset-x-0 top-full border-t border-blue-950 bg-jhu-blue px-6 py-4 shadow-lg md:hidden">
			<div class="space-y-1">
				{#each modules as mod}
					<a
						href="{base}/learn/{mod.id}"
						class="flex items-center rounded-lg border-l-2 px-3 py-2.5 text-sm font-medium transition-colors
							{currentModuleId === mod.id
							? 'border-current bg-white/10 ' + (moduleColors[mod.id] ?? 'text-white')
							: 'border-transparent text-white/70 hover:bg-white/8 hover:text-white'}"
					>
						{mod.title}
					</a>
				{/each}
			</div>
			{#if learnerName}
				<div class="mt-4 border-t border-white/10 pt-4">
					<p class="px-3 text-xs text-white/40">Signed in as</p>
					<p class="px-3 pt-0.5 text-sm font-medium text-white/80">{learnerName}</p>
				</div>
			{/if}
		</div>
	{/if}
</nav>

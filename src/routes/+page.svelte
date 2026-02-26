<script lang="ts">
	import { invalidateAll } from '$app/navigation';
	import { base } from '$app/paths';
	import ModuleCard from '$lib/components/modules/ModuleCard.svelte';
	import LearnerIdentityModal from '$lib/components/ui/LearnerIdentityModal.svelte';
	const IS_STATIC = (import.meta.env as Record<string, string>).PUBLIC_STATIC === 'true';

	let { data } = $props();

	// Count completed steps per module
	function moduleCompletedSteps(moduleId: string) {
		return data.completedSteps.filter((s) => s.moduleId === moduleId).length;
	}

	function moduleCurrentExerciseNum(moduleId: string): number | null {
		const mod = data.modules.find((m) => m.id === moduleId);
		if (!mod) return null;
		const seen = new Set(
			data.completedSteps.filter((s) => s.moduleId === moduleId).map((s) => s.exerciseId)
		);
		if (seen.size === 0) return null;
		let furthestIdx = -1;
		mod.exercises.forEach((ex, i) => { if (seen.has(ex.id)) furthestIdx = i; });
		return furthestIdx >= 0 ? furthestIdx + 1 : null;
	}

	function moduleTotalSteps(moduleId: string) {
		const mod = data.modules.find((m) => m.id === moduleId);
		if (!mod) return 0;
		return mod.exercises.reduce((sum, ex) => sum + (ex.step_count ?? 0), 0);
	}

	const showModal = $derived(!data.learnerId && !IS_STATIC);

	async function handleIdentified() {
		await invalidateAll();
	}
</script>

<div class="relative overflow-hidden">
	<!-- Terminal watermark -->
	<div
		aria-hidden="true"
		class="pointer-events-none absolute right-0 top-0 w-72 select-none px-6 pt-12 opacity-[0.07]"
		style="mask-image: linear-gradient(to bottom, black 0%, black 55%, transparent 100%); -webkit-mask-image: linear-gradient(to bottom, black 0%, black 55%, transparent 100%);"
	>
		<pre class="font-mono text-[0.6rem] leading-[1.7] text-jhu-blue">~/workshop $ cd library-context
~/workshop/library-context $ claude

  ╭──────────────────────────────╮
  │ claude  ✓ CLAUDE.md loaded   │
  ╰──────────────────────────────╯

> @patron-queries.txt

  Read 10 patron queries.

> Draft a reference response for
  query 1 following our library
  communication style from CLAUDE.md.

  Thank you for reaching out to
  our Ask a Librarian service.
  For peer-reviewed sources on
  social media and mental health
  published in the last 5 years,
  I recommend starting with
  PsycINFO and PubMed Central...

> The methodological debate section
  needs more detail.

  Researchers in this field often
  note that self-report measures
  may not accurately capture usage
  patterns, and many studies rely
  on cross-sectional designs that
  limit causal inference...

> /clear

  Conversation context cleared.

> ▌</pre>
	</div>

	<!-- Page content -->
	<div class="relative mx-auto max-w-4xl px-6 py-16">
		<div class="mb-12 text-center">
			<p class="mb-3 text-xs font-medium uppercase tracking-wider text-jhu-blue/60">
				Johns Hopkins University Libraries
			</p>
			<h1 class="font-serif text-[2.5rem] font-bold leading-tight tracking-tight text-jhu-blue">
				Claude Code for Librarians
			</h1>
			<p class="mx-auto mt-4 max-w-md text-[0.9375rem] leading-7 text-gray-500">
				Learn to use Claude Code CLI in your everyday library work — no coding required.
			</p>
			<p class="mt-2 font-mono text-[0.6875rem] tracking-wide text-gray-400">
				exercises run in your <a href="{base}/terminal-primer" class="text-jhu-blue/50 underline underline-offset-2 hover:text-jhu-blue transition-colors">terminal</a> &nbsp;·&nbsp; self-paced
			</p>
			<div class="mx-auto mt-6 h-px w-10 bg-jhu-gold"></div>
		</div>

		<div class="flex flex-wrap justify-center gap-6">
			{#each data.modules as mod}
				<div class="w-full sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333%-1rem)]">
					<ModuleCard
						module={mod}
						completedSteps={moduleCompletedSteps(mod.id)}
						totalSteps={moduleTotalSteps(mod.id)}
						currentExerciseNum={moduleCurrentExerciseNum(mod.id)}
					/>
				</div>
			{/each}
		</div>

		{#if data.modules.length === 0}
			<div class="mx-auto max-w-sm rounded-xl border border-amber-200 bg-amber-50 p-6 text-center">
				<p class="font-medium text-amber-800">No workshop modules found</p>
				<p class="mt-2 text-sm leading-6 text-amber-700">
					The content files couldn't be loaded. Make sure the
					<code class="rounded bg-amber-100 px-1 font-mono text-xs">src/content/modules/</code>
					directory exists and restart the dev server.
				</p>
			</div>
		{/if}
	</div>
</div>

{#if showModal}
	<LearnerIdentityModal onIdentified={handleIdentified} />
{/if}

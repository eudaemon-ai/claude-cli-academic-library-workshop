<script lang="ts">
	import { base } from '$app/paths';
	let { data } = $props();
	const { learner, timeline, notes } = data;
</script>

<div class="mx-auto max-w-3xl px-4 py-8">
	<div class="mb-6 flex items-center gap-3">
		<a href="{base}/facilitator?token={data.token}" class="text-sm text-blue-600 hover:underline">
			← Back to Dashboard
		</a>
	</div>

	<div class="mb-8 rounded-xl border border-gray-200 bg-white p-6">
		<h1 class="text-xl font-bold text-gray-900">{learner.name}</h1>
		<p class="mt-1 text-sm text-gray-500">Role: {learner.role} · Last seen: {learner.lastSeen}</p>
		<p class="mt-1 text-sm text-gray-500">{timeline.length} steps completed</p>
	</div>

	<div class="mb-8">
		<h2 class="mb-3 text-base font-semibold text-gray-700">Progress Timeline</h2>
		{#if timeline.length === 0}
			<div class="rounded-xl border border-gray-100 bg-gray-50 px-5 py-8 text-center">
				<p class="text-sm font-medium text-gray-500">No steps completed yet</p>
				<p class="mt-1 text-sm text-gray-400">
					This learner hasn't marked any steps complete. Check back after they've started
					working through the exercises.
				</p>
			</div>
		{:else}
			<div class="space-y-2">
				{#each timeline as item}
					<div class="flex items-start gap-3 rounded-lg border border-gray-100 bg-white px-4 py-3">
						<span class="mt-0.5 text-green-500">✓</span>
						<div class="flex-1">
							<p class="text-sm text-gray-700">
								<span class="font-medium">{item.moduleTitle}</span> /
								{item.exerciseTitle} — Step {item.stepIndex + 1}
							</p>
						</div>
						<span class="text-xs text-gray-400">{item.completedAt}</span>
					</div>
				{/each}
			</div>
		{/if}
	</div>

	{#if notes.length > 0}
		<div>
			<h2 class="mb-3 text-base font-semibold text-gray-700">Reflections</h2>
			<div class="space-y-3">
				{#each notes as note}
					<div class="rounded-xl border border-purple-100 bg-purple-50 p-4">
						<p class="mb-1 text-xs text-purple-600">
							{note.moduleTitle} / {note.exerciseTitle} · {note.updatedAt}
						</p>
						<p class="text-sm text-gray-700">{note.body}</p>
					</div>
				{/each}
			</div>
		</div>
	{/if}
</div>

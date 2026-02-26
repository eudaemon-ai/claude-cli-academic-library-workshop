<script lang="ts">
	import { formatRelativeTime } from '$lib/utils/format.js';

	interface LearnerRow {
		id: string;
		name: string;
		role: string;
		lastSeen: string;
		currentModule: string;
		currentExercise: string;
		stepsCompleted: number;
		status: 'on-pace' | 'slow' | 'inactive';
	}

	let { learners }: { learners: LearnerRow[] } = $props();

	const statusColors = {
		'on-pace': 'text-green-700 bg-green-100',
		slow: 'text-amber-700 bg-amber-100',
		inactive: 'text-red-700 bg-red-100'
	};
	const statusLabels = {
		'on-pace': '● On pace',
		slow: '◐ Behind',
		inactive: '○ Inactive'
	};
</script>

<div class="overflow-x-auto rounded-xl border border-gray-200 bg-white">
	<table class="w-full text-sm">
		<thead class="border-b border-gray-200 bg-gray-50 text-xs text-gray-500">
			<tr>
				<th class="px-4 py-3 text-left font-medium">Name</th>
				<th class="px-4 py-3 text-left font-medium">Role</th>
				<th class="px-4 py-3 text-left font-medium">Currently On</th>
				<th class="px-4 py-3 text-left font-medium">Steps</th>
				<th class="px-4 py-3 text-left font-medium">Last Active</th>
				<th class="px-4 py-3 text-left font-medium">Status</th>
			</tr>
		</thead>
		<tbody class="divide-y divide-gray-100">
			{#each learners as row}
				<tr class="hover:bg-gray-50">
					<td class="px-4 py-3">
						<a href="/facilitator/{row.id}" class="font-medium text-gray-900 hover:text-blue-600">
							{row.name}
						</a>
					</td>
					<td class="px-4 py-3 text-gray-500">{row.role}</td>
					<td class="px-4 py-3 text-gray-600">
						{row.currentModule ? `${row.currentModule} / ${row.currentExercise}` : '—'}
					</td>
					<td class="px-4 py-3 text-gray-600">{row.stepsCompleted}</td>
					<td class="px-4 py-3 text-gray-500">{formatRelativeTime(row.lastSeen)}</td>
					<td class="px-4 py-3">
						<span class="rounded-full px-2 py-0.5 text-xs font-medium {statusColors[row.status]}">
							{statusLabels[row.status]}
						</span>
					</td>
				</tr>
			{/each}
		</tbody>
	</table>

	{#if learners.length === 0}
		<div class="py-12 text-center">
			<svg class="mx-auto mb-3 h-8 w-8 text-gray-300" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true">
				<path stroke-linecap="round" stroke-linejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0z"/>
			</svg>
			<p class="text-sm font-medium text-gray-500">No learners have joined yet</p>
			<p class="mt-1 text-sm text-gray-400">Share the workshop URL with your cohort to get started. Learners appear here after they enter their name on the home page.</p>
		</div>
	{/if}
</div>

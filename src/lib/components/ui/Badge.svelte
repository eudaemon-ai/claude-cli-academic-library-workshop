<script lang="ts">
	type Status = 'complete' | 'in-progress' | 'not-started' | 'locked';
	let { status }: { status: Status } = $props();

	const styles: Record<Status, string> = {
		complete: 'bg-green-100 text-green-800',
		'in-progress': 'bg-blue-100 text-blue-800',
		'not-started': 'bg-gray-100 text-gray-600',
		locked: 'bg-gray-100 text-gray-400'
	};
	const labels: Record<Status, string> = {
		complete: 'Complete',
		'in-progress': 'In Progress',
		'not-started': 'Not Started',
		locked: 'Locked'
	};
</script>

<span class="inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium {styles[status]}">
	{labels[status]}
</span>

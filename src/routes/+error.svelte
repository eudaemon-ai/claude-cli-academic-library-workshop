<script lang="ts">
	import { page } from '$app/state';
	import { base } from '$app/paths';

	const status = $derived(page.status);
	const message = $derived(page.error?.message ?? '');

	const heading = $derived(
		status === 403
			? 'Access Restricted'
			: status === 404
				? 'Page Not Found'
				: 'Something Went Wrong'
	);

	const detail = $derived(
		status === 403
			? 'The facilitator dashboard requires a valid access token. Add <code class="font-mono text-sm bg-gray-100 px-1 rounded">?token=your-token</code> to the URL. If you don\'t have a token, ask your workshop organizer.'
			: status === 404
				? 'The page you\'re looking for doesn\'t exist. It may have been moved, or the URL might be incorrect.'
				: 'An unexpected error occurred on the server. Try refreshing the page. If the problem persists, contact your workshop facilitator.'
	);

	const is403 = $derived(status === 403);
	const is404 = $derived(status === 404);
</script>

<div class="mx-auto max-w-lg px-6 py-24 text-center">
	<p class="mb-3 font-mono text-4xl font-bold text-gray-200">{status}</p>

	<h1 class="font-serif text-2xl font-bold text-jhu-blue">{heading}</h1>

	<p class="mx-auto mt-4 max-w-sm text-[0.9375rem] leading-7 text-gray-500">
		{@html detail}
	</p>

	{#if message && !is403}
		<p class="mt-3 font-mono text-xs text-gray-400">{message}</p>
	{/if}

	<div class="mt-8 flex flex-wrap items-center justify-center gap-3">
		{#if is403}
			<a
				href="{base}/"
				class="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50"
			>
				Go to Workshop Home
			</a>
		{:else if is404}
			<a
				href="{base}/"
				class="rounded-lg bg-jhu-blue px-5 py-2 text-sm font-medium text-white hover:bg-blue-950"
			>
				Back to Modules
			</a>
			<button
				onclick={() => history.back()}
				class="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50"
			>
				Go Back
			</button>
		{:else}
			<button
				onclick={() => location.reload()}
				class="rounded-lg bg-jhu-blue px-5 py-2 text-sm font-medium text-white hover:bg-blue-950"
			>
				Refresh Page
			</button>
			<a
				href="{base}/"
				class="rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50"
			>
				Go to Workshop Home
			</a>
		{/if}
	</div>
</div>

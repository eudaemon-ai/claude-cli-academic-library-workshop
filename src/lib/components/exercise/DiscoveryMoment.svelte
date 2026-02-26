<script lang="ts">
	let {
		exerciseTitle,
		discussionHtml,
		onContinue
	}: {
		exerciseTitle: string;
		discussionHtml: string;
		onContinue: () => void;
	} = $props();
</script>

<div class="flex min-h-[60vh] flex-col items-center justify-center px-6 py-16 text-center">
	<div class="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-full bg-jhu-gold/15 text-2xl">💡</div>
	<h2 class="mb-2 font-serif text-3xl font-bold tracking-tight text-jhu-blue">Discovery Moment</h2>
	<p class="mb-8 max-w-md text-base leading-relaxed text-jhu-sable/70">You finished <strong class="font-semibold text-gray-800">{exerciseTitle}</strong>. Take a moment to discuss with your group.</p>

	<div class="mb-8 w-full max-w-2xl rounded-xl border border-jhu-gold/40 bg-jhu-gold/8 p-7 text-left">
		<div class="prose max-w-none text-gray-800">
			{@html discussionHtml}
		</div>
	</div>

	<button
		onclick={onContinue}
		class="rounded-xl bg-jhu-blue px-8 py-2.5 text-sm font-medium text-white hover:bg-blue-950"
	>
		Continue to Next Exercise →
	</button>
</div>

<script lang="ts">
	import { page } from '$app/state';
	import { base } from '$app/paths';

	// Referrer check: only show the "back" link if coming from the landing page.
	// The page is publicly accessible by URL but is framed as a landing-page resource.
</script>

<svelte:head>
	<title>Understanding the Terminal — Claude Code for Librarians</title>
</svelte:head>

<div class="mx-auto max-w-3xl px-6 py-14">

	<!-- Back link -->
	<a
		href="{base}/"
		class="mb-10 inline-flex items-center gap-1.5 text-sm text-jhu-blue/60 transition-colors hover:text-jhu-blue"
	>
		<svg viewBox="0 0 16 16" fill="currentColor" class="h-3.5 w-3.5" aria-hidden="true">
			<path fill-rule="evenodd" d="M14 8a.75.75 0 0 1-.75.75H4.56l3.22 3.22a.75.75 0 1 1-1.06 1.06l-4.5-4.5a.75.75 0 0 1 0-1.06l4.5-4.5a.75.75 0 0 1 1.06 1.06L4.56 7.25H13.25A.75.75 0 0 1 14 8z" clip-rule="evenodd"/>
		</svg>
		Back to workshop
	</a>

	<!-- Header -->
	<div class="mb-12">
		<p class="mb-3 text-xs font-medium uppercase tracking-wider text-jhu-blue/50">
			Before you begin
		</p>
		<h1 class="font-serif text-4xl font-bold leading-tight tracking-tight text-jhu-blue">
			Understanding the Terminal
		</h1>
		<p class="mt-5 text-[1.0625rem] leading-relaxed text-gray-500">
			Claude Code runs in a <em>terminal</em> — a text-based window on your computer. If you've
			only used Claude through the chat website, this page will show you what's different and
			why it matters for library work.
		</p>
		<div class="mt-7 h-px w-10 bg-jhu-gold"></div>
	</div>

	<!-- ── Section 1: What is the terminal ── -->
	<section class="mb-14">
		<h2 class="mb-5 font-serif text-2xl font-bold text-jhu-blue">What is the terminal?</h2>
		<p class="mb-4 leading-relaxed text-gray-600">
			The terminal (also called the command line or shell) is a text interface to your computer.
			Instead of clicking icons and menus, you type short commands and press Enter. The computer
			responds with text output. That's the whole interaction model.
		</p>
		<p class="mb-6 leading-relaxed text-gray-600">
			When you open a terminal, you'll see a prompt — a line ending in <code class="rounded bg-slate-100 px-1.5 py-0.5 font-mono text-sm text-jhu-blue">$</code> — that means the terminal is waiting for your input.
		</p>

		<!-- Terminal mockup -->
		<div class="overflow-hidden rounded-xl border border-slate-200 bg-jhu-blue shadow-md">
			<div class="flex items-center gap-1.5 border-b border-white/10 bg-white/5 px-4 py-2.5">
				<span class="h-2.5 w-2.5 rounded-full bg-red-400/70"></span>
				<span class="h-2.5 w-2.5 rounded-full bg-yellow-400/70"></span>
				<span class="h-2.5 w-2.5 rounded-full bg-green-400/70"></span>
				<span class="ml-2 font-mono text-[0.6875rem] text-white/30">Terminal</span>
			</div>
			<pre class="px-5 py-5 font-mono text-sm leading-relaxed text-white/80"><span class="text-jhu-gold">~</span> <span class="text-white/40">$</span> <span class="text-white">pwd</span>
/Users/yourname

<span class="text-jhu-gold">~</span> <span class="text-white/40">$</span> <span class="text-white">cd Documents/workshop</span>

<span class="text-jhu-gold">~/Documents/workshop</span> <span class="text-white/40">$</span> <span class="text-white">ls</span>
CLAUDE.md          patron-queries.txt   catalog-items.txt

<span class="text-jhu-gold">~/Documents/workshop</span> <span class="text-white/40">$</span> <span class="text-white">claude</span>
  ╭──────────────────────────────╮
  │ claude  <span class="text-green-400">✓</span> CLAUDE.md loaded   │
  ╰──────────────────────────────╯
<span class="text-white/40">></span> <span class="text-jhu-spirit">▌</span></pre>
		</div>
		<p class="mt-3 text-xs text-gray-400">
			The highlighted text after <code class="font-mono">$</code> is what you type. Everything
			else is output from the computer.
		</p>
	</section>

	<!-- ── Section 2: Chat vs CLI comparison ── -->
	<section class="mb-14">
		<h2 class="mb-2 font-serif text-2xl font-bold text-jhu-blue">
			Chat app vs. Claude Code CLI
		</h2>
		<p class="mb-7 leading-relaxed text-gray-600">
			You may already use Claude at <span class="font-mono text-sm text-gray-500">claude.ai</span>.
			That's great — but Claude Code is a fundamentally different tool, and the difference isn't
			just cosmetic.
		</p>

		<div class="grid gap-5 sm:grid-cols-2">
			<!-- Chat side -->
			<div class="rounded-xl border border-slate-200 bg-white p-6">
				<div class="mb-4 flex items-center gap-2">
					<span class="inline-flex h-7 w-7 items-center justify-center rounded-full bg-slate-100 text-base">💬</span>
					<h3 class="font-semibold text-gray-800">Claude.ai (chat)</h3>
				</div>
				<ul class="space-y-3 text-sm leading-relaxed text-gray-600">
					<li class="flex gap-2">
						<span class="mt-0.5 shrink-0 text-slate-400">·</span>
						<span>Runs in your browser. Claude never sees your local files unless you paste them in.</span>
					</li>
					<li class="flex gap-2">
						<span class="mt-0.5 shrink-0 text-slate-400">·</span>
						<span>Each conversation starts fresh — no memory of your previous sessions.</span>
					</li>
					<li class="flex gap-2">
						<span class="mt-0.5 shrink-0 text-slate-400">·</span>
						<span>You describe what you want; Claude writes text back. Nothing is saved automatically.</span>
					</li>
					<li class="flex gap-2">
						<span class="mt-0.5 shrink-0 text-slate-400">·</span>
						<span>Great for one-off questions or drafting when your content fits in a single paste.</span>
					</li>
				</ul>
			</div>

			<!-- CLI side -->
			<div class="rounded-xl border border-jhu-blue/20 bg-jhu-blue/[0.03] p-6 ring-1 ring-jhu-blue/10">
				<div class="mb-4 flex items-center gap-2">
					<span class="inline-flex h-7 w-7 items-center justify-center rounded-full bg-jhu-blue/10 text-base">⌨️</span>
					<h3 class="font-semibold text-jhu-blue">Claude Code (terminal)</h3>
				</div>
				<ul class="space-y-3 text-sm leading-relaxed text-gray-600">
					<li class="flex gap-2">
						<span class="mt-0.5 shrink-0 text-jhu-gold">·</span>
						<span>Runs on your computer. Claude can read and reference files you point it to with <code class="rounded bg-white px-1 font-mono text-xs text-jhu-blue">@filename</code>.</span>
					</li>
					<li class="flex gap-2">
						<span class="mt-0.5 shrink-0 text-jhu-gold">·</span>
						<span>Reads a <code class="rounded bg-white px-1 font-mono text-xs text-jhu-blue">CLAUDE.md</code> file you write once — so every session already knows your library's name, style, and policies.</span>
					</li>
					<li class="flex gap-2">
						<span class="mt-0.5 shrink-0 text-jhu-gold">·</span>
						<span>"Aware" of where you are on your computer (the working directory) — relevant to the files around it.</span>
					</li>
					<li class="flex gap-2">
						<span class="mt-0.5 shrink-0 text-jhu-gold">·</span>
						<span>Better for repeatable workflows: same folder, same context file, consistent results.</span>
					</li>
				</ul>
			</div>
		</div>
	</section>

	<!-- ── Section 3: Key concepts ── -->
	<section class="mb-14">
		<h2 class="mb-6 font-serif text-2xl font-bold text-jhu-blue">Four things to know</h2>

		<div class="space-y-6">

			<div class="flex gap-5">
				<div class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-jhu-blue font-mono text-sm font-bold text-white">1</div>
				<div>
					<h3 class="mb-1 font-semibold text-gray-800">The prompt tells you where you are</h3>
					<p class="text-sm leading-relaxed text-gray-600">
						The text before <code class="rounded bg-slate-100 px-1 font-mono text-xs">$</code> shows
						your current folder — called the <em>working directory</em>. Claude Code operates on files
						in that folder, so navigating to the right place before typing <code class="rounded bg-slate-100 px-1 font-mono text-xs">claude</code> matters.
					</p>
				</div>
			</div>

			<div class="flex gap-5">
				<div class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-jhu-blue font-mono text-sm font-bold text-white">2</div>
				<div>
					<h3 class="mb-1 font-semibold text-gray-800"><code class="font-mono text-base">claude</code> starts the AI session</h3>
					<p class="text-sm leading-relaxed text-gray-600">
						Typing <code class="rounded bg-slate-100 px-1 font-mono text-xs">claude</code> and pressing
						Enter launches Claude Code. You'll see a confirmation that it has loaded your
						<code class="rounded bg-slate-100 px-1 font-mono text-xs">CLAUDE.md</code> if one exists,
						then a <code class="rounded bg-slate-100 px-1 font-mono text-xs">&gt;</code> prompt where
						you type your requests in plain English.
					</p>
				</div>
			</div>

			<div class="flex gap-5">
				<div class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-jhu-blue font-mono text-sm font-bold text-white">3</div>
				<div>
					<h3 class="mb-1 font-semibold text-gray-800"><code class="font-mono text-base">CLAUDE.md</code> is your standing brief</h3>
					<p class="text-sm leading-relaxed text-gray-600">
						This is a plain text file you create once in your working folder. It can contain your
						library's name, communication tone, citation preferences, or anything Claude should
						always know. Claude Code reads it automatically every time you start a session — you
						never have to repeat yourself.
					</p>
				</div>
			</div>

			<div class="flex gap-5">
				<div class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-jhu-blue font-mono text-sm font-bold text-white">4</div>
				<div>
					<h3 class="mb-1 font-semibold text-gray-800"><code class="font-mono text-base">@filename</code> hands Claude a file</h3>
					<p class="text-sm leading-relaxed text-gray-600">
						While in a session, typing <code class="rounded bg-slate-100 px-1 font-mono text-xs">@patron-queries.txt</code>
						makes Claude read that file and include its contents in the conversation — no copying and
						pasting. This is how you'll work with real library data throughout the exercises.
					</p>
				</div>
			</div>

		</div>
	</section>

	<!-- ── Comfort note ── -->
	<div class="mb-12 rounded-xl border border-jhu-spirit/30 bg-jhu-spirit/5 px-7 py-6">
		<p class="text-sm leading-relaxed text-gray-600">
			<span class="font-semibold text-jhu-blue">You don't need to memorize any commands.</span>
			The workshop exercises show you exactly what to type, step by step. This page just gives you
			a mental model so nothing feels mysterious when you see it for the first time.
		</p>
	</div>

	<!-- ── Further reading ── -->
	<section class="mb-12">
		<h2 class="mb-4 font-serif text-2xl font-bold text-jhu-blue">Further reading</h2>
		<a
			href="http://www.cryptonomicon.com/beginning.html"
			target="_blank"
			rel="noopener noreferrer"
			class="group flex items-start gap-4 rounded-xl border border-slate-200 bg-white p-5 transition-colors hover:border-jhu-blue/30 hover:bg-jhu-blue/[0.02]"
		>
			<div class="mt-0.5 shrink-0 text-2xl">📖</div>
			<div class="min-w-0">
				<p class="font-semibold text-jhu-blue group-hover:underline group-hover:underline-offset-2">
					In The Beginning Was the Command Line
				</p>
				<p class="mt-1 text-sm text-gray-500">Neal Stephenson, 1999</p>
				<p class="mt-2 text-sm leading-relaxed text-gray-600">
					A long essay on the cultural history of operating systems and why the command line
					persists. Opinionated, funny, and still surprisingly relevant. Worth reading if you
					want to understand why the terminal feels the way it does.
				</p>
			</div>
			<svg viewBox="0 0 16 16" fill="currentColor" class="mt-1 h-4 w-4 shrink-0 text-gray-300 transition-colors group-hover:text-jhu-blue/40" aria-hidden="true">
				<path d="M6.22 8.72a.75.75 0 0 0 1.06 1.06l5.22-5.22v1.69a.75.75 0 0 0 1.5 0v-3.5a.75.75 0 0 0-.75-.75h-3.5a.75.75 0 0 0 0 1.5h1.69L6.22 8.72z"/>
				<path d="M3.5 6.75A.75.75 0 0 0 2 6.75v6.5C2 14.216 2.784 15 3.75 15h6.5A1.75 1.75 0 0 0 12 13.25v-1.5a.75.75 0 0 0-1.5 0v1.5a.25.25 0 0 1-.25.25h-6.5a.25.25 0 0 1-.25-.25v-6.5z"/>
			</svg>
		</a>
	</section>

	<!-- ── CTA ── -->
	<div class="text-center">
		<a
			href="{base}/"
			class="inline-flex items-center gap-2 rounded-full bg-jhu-blue px-8 py-3 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-jhu-blue/90"
		>
			I'm ready — take me to the modules
			<svg viewBox="0 0 16 16" fill="currentColor" class="h-3.5 w-3.5" aria-hidden="true">
				<path fill-rule="evenodd" d="M2 8a.75.75 0 0 1 .75-.75h8.69L8.22 4.03a.75.75 0 0 1 1.06-1.06l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 1 1-1.06-1.06l3.22-3.22H2.75A.75.75 0 0 1 2 8z" clip-rule="evenodd"/>
			</svg>
		</a>
	</div>

</div>

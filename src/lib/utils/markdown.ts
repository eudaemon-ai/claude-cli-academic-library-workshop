import { marked } from 'marked';

// Configure marked with GitHub-flavored markdown defaults.
// Used for rendering exercise body content.
marked.setOptions({
	gfm: true,
	breaks: false
});

export function renderMarkdown(src: string): string {
	return marked.parse(src, { async: false }) as string;
}

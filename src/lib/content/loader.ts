import { readFileSync, readdirSync } from 'fs';
import { join } from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import type { Module, ModuleMeta, Exercise, ExerciseMeta } from './types.js';

// Content lives at src/content/modules/ relative to the project root.
// In SvelteKit server context, process.cwd() is the project root.
function contentRoot(): string {
	return join(process.cwd(), 'src', 'content', 'modules');
}

function renderMarkdown(src: string): string {
	return marked.parse(src, { async: false }) as string;
}

export function loadAllModules(): ModuleMeta[] {
	const root = contentRoot();
	const dirs = readdirSync(root, { withFileTypes: true })
		.filter((d: { isDirectory: () => boolean }) => d.isDirectory())
		.map((d: { name: string }) => d.name)
		.sort();

	return dirs.map((dir) => {
		const raw = readFileSync(join(root, dir, 'module.md'), 'utf-8');
		const { data } = matter(raw);
		const meta = data as ModuleMeta;
		const exerciseCounts = loadExerciseMeta(dir);
		return {
			...meta,
			exercises: meta.exercises.map((ex) => ({
				...ex,
				step_count: exerciseCounts.find((e) => e.id === ex.id)?.step_count ?? 0
			}))
		};
	});
}

export function loadModule(moduleId: string): Module {
	const root = contentRoot();
	const moduleDir = join(root, moduleId);

	const moduleRaw = readFileSync(join(moduleDir, 'module.md'), 'utf-8');
	const { data: moduleMeta, content: moduleContent } = matter(moduleRaw);

	const exerciseDirs = readdirSync(moduleDir)
		.filter((f) => f !== 'module.md' && f.endsWith('.md'))
		.sort();

	const exercises: Exercise[] = exerciseDirs.map((filename) => {
		return loadExercise(moduleId, filename.replace('.md', ''));
	});

	return {
		...(moduleMeta as ModuleMeta),
		exercises,
		body: renderMarkdown(moduleContent)
	};
}

export function loadExercise(moduleId: string, exerciseId: string): Exercise {
	const root = contentRoot();
	const filePath = join(root, moduleId, `${exerciseId}.md`);
	const raw = readFileSync(filePath, 'utf-8');
	const { data, content } = matter(raw);

	return {
		...(data as Omit<Exercise, 'body'>),
		body: renderMarkdown(content)
	};
}

export function loadExerciseMeta(moduleId: string): ExerciseMeta[] {
	const root = contentRoot();
	const moduleDir = join(root, moduleId);
	return readdirSync(moduleDir)
		.filter((f) => f !== 'module.md' && f.endsWith('.md'))
		.sort()
		.map((filename) => {
			const raw = readFileSync(join(moduleDir, filename), 'utf-8');
			const { data } = matter(raw);
			return {
			id: data.id,
			title: data.title,
			estimated_minutes: data.estimated_minutes,
			step_count: Array.isArray(data.steps) ? data.steps.length : 0
		};
		});
}

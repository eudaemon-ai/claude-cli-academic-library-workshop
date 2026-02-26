import {
	PutCommand,
	GetCommand,
	QueryCommand,
	UpdateCommand
} from '@aws-sdk/lib-dynamodb';
import { getDocClient, TABLE } from './client.js';
import { ttlEpoch } from './schema.js';

// ─── Key helpers ────────────────────────────────────────────────────────────

function learnerPk(learnerId: string) {
	return `learner#${learnerId}`;
}

function progressSk(moduleId: string, exerciseId: string, stepIndex: number) {
	return `progress#${moduleId}#${exerciseId}#${String(stepIndex).padStart(3, '0')}`;
}

function noteSk(moduleId: string, exerciseId: string) {
	return `note#${moduleId}#${exerciseId}`;
}

// ─── Types ───────────────────────────────────────────────────────────────────

export interface LearnerItem {
	pk: string;
	sk: 'META';
	id: string;
	name: string;
	role: string;
	cohort: string;
	createdAt: string;
	lastSeen: string;
	expiresAt: number;
}

export interface ProgressItem {
	pk: string;
	sk: string;
	learnerId: string;
	moduleId: string;
	exerciseId: string;
	stepIndex: number;
	completedAt: string;
	expiresAt: number;
}

export interface NoteItem {
	pk: string;
	sk: string;
	learnerId: string;
	moduleId: string;
	exerciseId: string;
	body: string;
	createdAt: string;
	updatedAt: string;
	expiresAt: number;
}

// ─── Learner operations ──────────────────────────────────────────────────────

export async function createLearner(opts: {
	id: string;
	name: string;
	role: string;
	cohort: string;
}): Promise<void> {
	const now = new Date().toISOString();
	const db = getDocClient();
	await db.send(
		new PutCommand({
			TableName: TABLE,
			Item: {
				pk: learnerPk(opts.id),
				sk: 'META',
				id: opts.id,
				name: opts.name,
				role: opts.role,
				cohort: opts.cohort,
				createdAt: now,
				lastSeen: now,
				expiresAt: ttlEpoch()
			} satisfies LearnerItem
		})
	);
}

export async function getLearner(learnerId: string): Promise<LearnerItem | null> {
	const db = getDocClient();
	const result = await db.send(
		new GetCommand({
			TableName: TABLE,
			Key: { pk: learnerPk(learnerId), sk: 'META' }
		})
	);
	return (result.Item as LearnerItem) ?? null;
}

export async function updateLearnerName(learnerId: string, name: string): Promise<void> {
	const db = getDocClient();
	await db.send(
		new UpdateCommand({
			TableName: TABLE,
			Key: { pk: learnerPk(learnerId), sk: 'META' },
			UpdateExpression: 'SET #name = :name',
			ExpressionAttributeNames: { '#name': 'name' },
			ExpressionAttributeValues: { ':name': name }
		})
	);
}

export async function updateLastSeen(learnerId: string): Promise<void> {
	const db = getDocClient();
	await db.send(
		new UpdateCommand({
			TableName: TABLE,
			Key: { pk: learnerPk(learnerId), sk: 'META' },
			UpdateExpression: 'SET lastSeen = :ts',
			ExpressionAttributeValues: { ':ts': new Date().toISOString() }
		})
	);
}

export async function getLearnersByCohort(cohort: string): Promise<LearnerItem[]> {
	const db = getDocClient();
	const result = await db.send(
		new QueryCommand({
			TableName: TABLE,
			IndexName: 'cohort-lastSeen-index',
			KeyConditionExpression: 'cohort = :cohort',
			ExpressionAttributeValues: { ':cohort': cohort },
			ScanIndexForward: false // most recently seen first
		})
	);
	// GSI returns all items including progress/notes if they have cohort attr — filter to META
	return ((result.Items ?? []) as LearnerItem[]).filter((i) => i.sk === 'META');
}

// ─── Progress operations ─────────────────────────────────────────────────────

export async function recordStepComplete(opts: {
	learnerId: string;
	moduleId: string;
	exerciseId: string;
	stepIndex: number;
}): Promise<void> {
	const now = new Date().toISOString();
	const db = getDocClient();
	await db.send(
		new PutCommand({
			TableName: TABLE,
			Item: {
				pk: learnerPk(opts.learnerId),
				sk: progressSk(opts.moduleId, opts.exerciseId, opts.stepIndex),
				learnerId: opts.learnerId,
				moduleId: opts.moduleId,
				exerciseId: opts.exerciseId,
				stepIndex: opts.stepIndex,
				completedAt: now,
				expiresAt: ttlEpoch()
			} satisfies ProgressItem
		})
	);
}

export async function getLearnerProgress(learnerId: string): Promise<ProgressItem[]> {
	const db = getDocClient();
	const result = await db.send(
		new QueryCommand({
			TableName: TABLE,
			KeyConditionExpression: 'pk = :pk AND begins_with(sk, :prefix)',
			ExpressionAttributeValues: {
				':pk': learnerPk(learnerId),
				':prefix': 'progress#'
			}
		})
	);
	return (result.Items ?? []) as ProgressItem[];
}

// ─── Notes operations ─────────────────────────────────────────────────────────

export async function upsertNote(opts: {
	learnerId: string;
	moduleId: string;
	exerciseId: string;
	body: string;
}): Promise<void> {
	const now = new Date().toISOString();
	const db = getDocClient();
	// Use UpdateItem to upsert: set body + updatedAt, preserve createdAt if exists
	await db.send(
		new UpdateCommand({
			TableName: TABLE,
			Key: {
				pk: learnerPk(opts.learnerId),
				sk: noteSk(opts.moduleId, opts.exerciseId)
			},
			UpdateExpression:
				'SET #body = :body, updatedAt = :now, expiresAt = :ttl,' +
				' learnerId = :lid, moduleId = :mid, exerciseId = :eid,' +
				' createdAt = if_not_exists(createdAt, :now)',
			ExpressionAttributeNames: { '#body': 'body' },
			ExpressionAttributeValues: {
				':body': opts.body,
				':now': now,
				':ttl': ttlEpoch(),
				':lid': opts.learnerId,
				':mid': opts.moduleId,
				':eid': opts.exerciseId
			}
		})
	);
}

export async function getLearnerNotes(learnerId: string): Promise<NoteItem[]> {
	const db = getDocClient();
	const result = await db.send(
		new QueryCommand({
			TableName: TABLE,
			KeyConditionExpression: 'pk = :pk AND begins_with(sk, :prefix)',
			ExpressionAttributeValues: {
				':pk': learnerPk(learnerId),
				':prefix': 'note#'
			}
		})
	);
	return (result.Items ?? []) as NoteItem[];
}

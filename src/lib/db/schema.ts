/**
 * DynamoDB table definition for LibraryWorkshop.
 *
 * Single table design — all entities share one table with prefixed keys:
 *   Learner:  pk="learner#<id>"  sk="META"
 *   Progress: pk="learner#<id>"  sk="progress#<moduleId>#<exerciseId>#<padded-stepIndex>"
 *   Note:     pk="learner#<id>"  sk="note#<moduleId>#<exerciseId>"
 *
 * GSI1 (cohort-lastSeen-index): pk=cohort, sk=lastSeen — used by facilitator dashboard.
 */
export const TABLE_DEFINITION = {
	TableName: 'LibraryWorkshop',
	BillingMode: 'PAY_PER_REQUEST',
	KeySchema: [
		{ AttributeName: 'pk', KeyType: 'HASH' },
		{ AttributeName: 'sk', KeyType: 'RANGE' }
	],
	AttributeDefinitions: [
		{ AttributeName: 'pk', AttributeType: 'S' },
		{ AttributeName: 'sk', AttributeType: 'S' },
		{ AttributeName: 'cohort', AttributeType: 'S' },
		{ AttributeName: 'lastSeen', AttributeType: 'S' }
	],
	GlobalSecondaryIndexes: [
		{
			IndexName: 'cohort-lastSeen-index',
			KeySchema: [
				{ AttributeName: 'cohort', KeyType: 'HASH' },
				{ AttributeName: 'lastSeen', KeyType: 'RANGE' }
			],
			Projection: { ProjectionType: 'ALL' }
		}
	],
	TimeToLiveSpecification: {
		AttributeName: 'expiresAt',
		Enabled: true
	}
} as const;

/** TTL: 48 hours from now (epoch seconds) */
export function ttlEpoch(): number {
	return Math.floor(Date.now() / 1000) + 48 * 60 * 60;
}

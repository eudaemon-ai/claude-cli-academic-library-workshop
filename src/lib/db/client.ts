import { DynamoDBClient } from '@aws-sdk/client-dynamodb';
import { DynamoDBDocumentClient } from '@aws-sdk/lib-dynamodb';
import { fromTemporaryCredentials, fromNodeProviderChain } from '@aws-sdk/credential-providers';

let _docClient: DynamoDBDocumentClient | null = null;

export function getDocClient(): DynamoDBDocumentClient {
	if (!_docClient) {
		const region = process.env.AWS_REGION ?? 'us-east-1';
		const roleArn = process.env.AWS_ROLE_ARN;

		const raw = new DynamoDBClient({
			region,
			// If AWS_ROLE_ARN is set, assume that role via STS.
			// The underlying credentials for the STS call come from the
			// standard AWS credential chain (instance profile, ECS task role,
			// ~/.aws/credentials profile, etc.) — no static keys needed.
			...(roleArn && {
				credentials: fromTemporaryCredentials({
					masterCredentials: fromNodeProviderChain({
						profile: process.env.AWS_PROFILE
					}),
					params: {
						RoleArn: roleArn,
						RoleSessionName: process.env.AWS_ROLE_SESSION_NAME ?? 'library-workshop-session',
						DurationSeconds: 3600
					}
				})
			})
		});

		_docClient = DynamoDBDocumentClient.from(raw, {
			marshallOptions: { removeUndefinedValues: true }
		});
	}
	return _docClient;
}

export const TABLE = process.env.DYNAMODB_TABLE ?? 'LibraryWorkshop';

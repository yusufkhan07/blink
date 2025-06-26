import { Installation } from '@slack/bolt';
import AWS from 'aws-sdk';
const dynamoDb = new AWS.DynamoDB.DocumentClient();

export class SlackOAuthTokensRepository {
  private readonly tableName: string = process.env.SLACK_OAUTHTOKENS_TABLENAME;

  storeInstallation = async (installation: Installation) => {
    const params = {
      TableName: this.tableName,
      Item: {
        teamId: installation.team.id,
        ...installation,
      },
    };

    await dynamoDb.put(params).promise();
  };

  fetchInstallation = async (teamId: string): Promise<Installation> => {
    const result = await dynamoDb
      .get({
        TableName: this.tableName,
        Key: {
          teamId,
        },
      })
      .promise();

    if (!result.Item) {
      throw new Error('Installation not found');
    }

    // TODO: use plainToClass instead of casting it with "as"
    return result.Item as Installation;
  };

  deleteInstallation = async (teamId: string) => {
    await dynamoDb
      .delete({
        TableName: this.tableName,
        Key: {
          teamId,
        },
      })
      .promise();
  };
}

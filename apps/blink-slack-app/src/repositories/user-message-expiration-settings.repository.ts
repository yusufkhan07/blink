import AWS from 'aws-sdk';
const dynamoDb = new AWS.DynamoDB.DocumentClient();

export class UserMessageExpirationSettingsRepository {
  constructor(private readonly tableName: string) {}

  async saveExpirationTime(userId: string, expirationTime: string) {
    const params = {
      TableName: this.tableName,
      Item: {
        userId,
        expirationTime,
      },
    };

    await dynamoDb.put(params).promise();
  }

  async getExpirationTime(userId: string): Promise<string | undefined> {
    const params = {
      TableName: this.tableName,
      Key: { userId },
    };

    const result = await dynamoDb.get(params).promise();
    return result.Item?.expirationTime;
  }
}

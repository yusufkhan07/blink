import AWS from 'aws-sdk';
const dynamoDb = new AWS.DynamoDB.DocumentClient();

export interface UserMessage {
  id: string;
  text: string;
  created_at: string;
  expire_at: string;
}

export class UserMessageRepository {
  constructor(private readonly tableName: string) {}

  async save(message: UserMessage) {
    const params = {
      TableName: this.tableName,
      Item: message,
    };

    await dynamoDb.put(params).promise();
  }

  async delete(id: string) {
    const params = {
      TableName: this.tableName,
      Key: { id },
    };

    await dynamoDb.delete(params).promise();
  }

  async getValidOrDeleteExpiredMessage(
    id: string
  ): Promise<UserMessage | undefined> {
    const params = {
      TableName: this.tableName,
      Key: { id },
    };
    const result = await dynamoDb.get(params).promise();
    const item = result.Item as UserMessage | undefined;

    if (!item) return;

    // Check if expired (expire_at should be epoch seconds)
    if (new Date(item.expire_at) < new Date()) {
      await this.delete(id);
      return;
    }

    return item;
  }
}

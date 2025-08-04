import AWS from 'aws-sdk';
const dynamoDb = new AWS.DynamoDB.DocumentClient();

export interface Metric {
  id: string;
  sortKey: string;
}

export class MetricsRepository {
  constructor(private readonly tableName: string) {}

  async save(metric: Metric) {
    const params = {
      TableName: this.tableName,
      Item: metric,
    };

    await dynamoDb.put(params).promise();
  }

  async incrementDirectMessageCount(team: { id: string; name: string }) {
    const params = {
      TableName: this.tableName,
      Key: { id: team.id, sortKey: 'count_dm' },
      UpdateExpression:
        'SET #count = if_not_exists(#count, :zero) + :inc, #team_name = :team_name',
      ExpressionAttributeNames: {
        '#count': 'count',
        '#team_name': 'team_name',
      },
      ExpressionAttributeValues: {
        ':inc': 1,
        ':zero': 0,
        ':team_name': team.name,
      },
      ReturnValues: 'UPDATED_NEW',
    };

    await dynamoDb.update(params).promise();
  }

  async incrementChannelMessageCount(team: { id: string; name: string }) {
    const params = {
      TableName: this.tableName,
      Key: { id: team.id, sortKey: 'count_channel' },
      UpdateExpression:
        'SET #count = if_not_exists(#count, :zero) + :inc, #team_name = :team_name',
      ExpressionAttributeNames: {
        '#count': 'count',
        '#team_name': 'team_name',
      },
      ExpressionAttributeValues: {
        ':inc': 1,
        ':zero': 0,
        ':team_name': team.name,
      },
      ReturnValues: 'UPDATED_NEW',
    };

    await dynamoDb.update(params).promise();
  }
}

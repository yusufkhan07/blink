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
}

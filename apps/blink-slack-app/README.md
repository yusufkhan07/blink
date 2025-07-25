# Blink Slack App

Blink is a Slack app that lets users send disappearing messages in Slack channels. Messages are automatically deleted after a set expiration time.

## Installation

You can install Blink for your Slack workspace at [https://blink.bytedevs.com](https://blink.bytedevs.com).

## Technologies Used

- **Slack Bolt**: For building Slack app interactions and event handling.
- **Serverless Framework**: For deploying and managing AWS Lambda functions and infrastructure.
- **AWS Lambda**: Handles Slack webhooks and receives events from Slack when users use Blink commands.
- **AWS Step Functions**: Orchestrates background workflows for message expiration and deletion.
- **AWS DynamoDB**: Stores user settings, message metadata, and other app data.
- **TypeScript**: For type safety and maintainable code.

## Architecture

- User sends a message using the Blink Slack command.
- AWS Lambda receives the event from Slack and processes the command.
- AWS Step Functions and Lambda schedule and execute background jobs to delete messages after their expiration time.
- The app is fully serverless, scalable, and cost-effective.

---

For more information, see the [LICENSE](../../LICENSE.txt) for usage restrictions.

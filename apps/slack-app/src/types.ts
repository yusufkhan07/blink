export interface MessageExpirationHandlerStateMachineInput {
  expireAt: string;
  ts: string;
  channel_id: string;
  user_id: string;
}

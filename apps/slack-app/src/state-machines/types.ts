export interface MessageExpirationHandlerStateMachineInput {
  expireAt: string;
  team_id: string;
  ts: string;
  channel_id: string;
  user_id: string;
}

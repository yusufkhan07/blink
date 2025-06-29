export interface MessageExpirationHandlerStateMachineInput {
  expire_at: string;
  team_id: string;
  ts: string;
  channel_id: string;
  user_id: string;
}

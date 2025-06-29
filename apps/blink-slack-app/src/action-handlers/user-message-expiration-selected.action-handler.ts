import { AllMiddlewareArgs,SlackActionMiddlewareArgs, StringIndexed } from "@slack/bolt";

export const userMessageExpirationSelectedActionHandler = async ({
  ack,
  action,
  body,
  client,
}: SlackActionMiddlewareArgs & AllMiddlewareArgs<StringIndexed>): Promise<void> => { 
    await ack();

    if(action.type !== 'static_select') {
        return;
    }

    // TODO: Save the settings for user in database.
    
    console.log('User selected message expiration:', body.user, action.selected_option.value);
};
import { AllMiddlewareArgs,SlackActionMiddlewareArgs, StringIndexed } from "@slack/bolt";
import { UserMessageExpirationSettingsRepository } from "../repositories/user-message-expiration-settings.repository";

const userMessageExpirationSettingsRepository = new UserMessageExpirationSettingsRepository();

export const userMessageExpirationSelectedActionHandler = async ({
  ack,
  action,
  body
}: SlackActionMiddlewareArgs & AllMiddlewareArgs<StringIndexed>): Promise<void> => { 
    await ack();

    if(action.type !== 'static_select') {
        return;
    }

    await userMessageExpirationSettingsRepository.saveExpirationTime(
        body.user.id,
        action.selected_option.value
    );
};
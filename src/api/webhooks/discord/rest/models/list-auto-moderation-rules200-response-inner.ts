/* tslint:disable */
/* eslint-disable */
/**
 * Discord HTTP API (Preview)
 * Preview of the Discord v10 HTTP API specification. See https://discord.com/developers/docs for more details.
 *
 * The version of the OpenAPI document: 10
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

// May contain unused imports in some cases
// @ts-ignore
import { AutomodEventType } from "./automod-event-type";
// May contain unused imports in some cases
// @ts-ignore
import { AutomodTriggerType } from "./automod-trigger-type";
// May contain unused imports in some cases
// @ts-ignore
import { DefaultKeywordRuleResponse } from "./default-keyword-rule-response";
// May contain unused imports in some cases
// @ts-ignore
import { KeywordRuleResponse } from "./keyword-rule-response";
// May contain unused imports in some cases
// @ts-ignore
import { MLSpamRuleResponse } from "./mlspam-rule-response";
// May contain unused imports in some cases
// @ts-ignore
import { MentionSpamRuleResponse } from "./mention-spam-rule-response";
// May contain unused imports in some cases
// @ts-ignore
import { SpamLinkRuleResponse } from "./spam-link-rule-response";

/**
 * @type ListAutoModerationRules200ResponseInner
 * @export
 */
export type ListAutoModerationRules200ResponseInner =
    | DefaultKeywordRuleResponse
    | KeywordRuleResponse
    | MLSpamRuleResponse
    | MentionSpamRuleResponse
    | SpamLinkRuleResponse;

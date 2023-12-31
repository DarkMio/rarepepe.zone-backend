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
import { DefaultKeywordListUpsertRequest } from "./default-keyword-list-upsert-request";
// May contain unused imports in some cases
// @ts-ignore
import { KeywordUpsertRequest } from "./keyword-upsert-request";
// May contain unused imports in some cases
// @ts-ignore
import { MLSpamUpsertRequest } from "./mlspam-upsert-request";
// May contain unused imports in some cases
// @ts-ignore
import { MentionSpamUpsertRequest } from "./mention-spam-upsert-request";
// May contain unused imports in some cases
// @ts-ignore
import { MentionSpamUpsertRequestTriggerMetadata } from "./mention-spam-upsert-request-trigger-metadata";

/**
 * @type CreateAutoModerationRuleRequest
 * @export
 */
export type CreateAutoModerationRuleRequest =
  | DefaultKeywordListUpsertRequest
  | KeywordUpsertRequest
  | MLSpamUpsertRequest
  | MentionSpamUpsertRequest;

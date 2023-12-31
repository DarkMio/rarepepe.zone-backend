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

/**
 *
 * @export
 * @interface SpamLinkRuleResponse
 */
export interface SpamLinkRuleResponse {
  /**
   *
   * @type {any}
   * @memberof SpamLinkRuleResponse
   */
  id: any;
  /**
   *
   * @type {any}
   * @memberof SpamLinkRuleResponse
   */
  guild_id: any;
  /**
   *
   * @type {any}
   * @memberof SpamLinkRuleResponse
   */
  creator_id: any;
  /**
   *
   * @type {any}
   * @memberof SpamLinkRuleResponse
   */
  name: any;
  /**
   *
   * @type {AutomodEventType}
   * @memberof SpamLinkRuleResponse
   */
  event_type: AutomodEventType;
  /**
   *
   * @type {any}
   * @memberof SpamLinkRuleResponse
   */
  actions: any;
  /**
   *
   * @type {AutomodTriggerType}
   * @memberof SpamLinkRuleResponse
   */
  trigger_type: AutomodTriggerType;
  /**
   *
   * @type {any}
   * @memberof SpamLinkRuleResponse
   */
  enabled?: any;
  /**
   *
   * @type {any}
   * @memberof SpamLinkRuleResponse
   */
  exempt_roles?: any;
  /**
   *
   * @type {any}
   * @memberof SpamLinkRuleResponse
   */
  exempt_channels?: any;
  /**
   *
   * @type {any}
   * @memberof SpamLinkRuleResponse
   */
  trigger_metadata: any;
}

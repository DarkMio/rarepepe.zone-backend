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
 * @interface MLSpamRuleResponse
 */
export interface MLSpamRuleResponse {
  /**
   *
   * @type {any}
   * @memberof MLSpamRuleResponse
   */
  id: any;
  /**
   *
   * @type {any}
   * @memberof MLSpamRuleResponse
   */
  guild_id: any;
  /**
   *
   * @type {any}
   * @memberof MLSpamRuleResponse
   */
  creator_id: any;
  /**
   *
   * @type {any}
   * @memberof MLSpamRuleResponse
   */
  name: any;
  /**
   *
   * @type {AutomodEventType}
   * @memberof MLSpamRuleResponse
   */
  event_type: AutomodEventType;
  /**
   *
   * @type {any}
   * @memberof MLSpamRuleResponse
   */
  actions: any;
  /**
   *
   * @type {AutomodTriggerType}
   * @memberof MLSpamRuleResponse
   */
  trigger_type: AutomodTriggerType;
  /**
   *
   * @type {any}
   * @memberof MLSpamRuleResponse
   */
  enabled?: any;
  /**
   *
   * @type {any}
   * @memberof MLSpamRuleResponse
   */
  exempt_roles?: any;
  /**
   *
   * @type {any}
   * @memberof MLSpamRuleResponse
   */
  exempt_channels?: any;
  /**
   *
   * @type {any}
   * @memberof MLSpamRuleResponse
   */
  trigger_metadata: any;
}

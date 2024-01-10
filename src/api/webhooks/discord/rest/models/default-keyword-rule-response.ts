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
import { DefaultKeywordListTriggerMetadataResponse } from "./default-keyword-list-trigger-metadata-response";

/**
 *
 * @export
 * @interface DefaultKeywordRuleResponse
 */
export interface DefaultKeywordRuleResponse {
    /**
     *
     * @type {any}
     * @memberof DefaultKeywordRuleResponse
     */
    id: any;
    /**
     *
     * @type {any}
     * @memberof DefaultKeywordRuleResponse
     */
    guild_id: any;
    /**
     *
     * @type {any}
     * @memberof DefaultKeywordRuleResponse
     */
    creator_id: any;
    /**
     *
     * @type {any}
     * @memberof DefaultKeywordRuleResponse
     */
    name: any;
    /**
     *
     * @type {AutomodEventType}
     * @memberof DefaultKeywordRuleResponse
     */
    event_type: AutomodEventType;
    /**
     *
     * @type {any}
     * @memberof DefaultKeywordRuleResponse
     */
    actions: any;
    /**
     *
     * @type {AutomodTriggerType}
     * @memberof DefaultKeywordRuleResponse
     */
    trigger_type: AutomodTriggerType;
    /**
     *
     * @type {any}
     * @memberof DefaultKeywordRuleResponse
     */
    enabled?: any;
    /**
     *
     * @type {any}
     * @memberof DefaultKeywordRuleResponse
     */
    exempt_roles?: any;
    /**
     *
     * @type {any}
     * @memberof DefaultKeywordRuleResponse
     */
    exempt_channels?: any;
    /**
     *
     * @type {DefaultKeywordListTriggerMetadataResponse}
     * @memberof DefaultKeywordRuleResponse
     */
    trigger_metadata: DefaultKeywordListTriggerMetadataResponse;
}

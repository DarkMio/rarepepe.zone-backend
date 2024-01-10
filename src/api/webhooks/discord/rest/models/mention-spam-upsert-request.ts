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
import { MentionSpamUpsertRequestTriggerMetadata } from "./mention-spam-upsert-request-trigger-metadata";

/**
 *
 * @export
 * @interface MentionSpamUpsertRequest
 */
export interface MentionSpamUpsertRequest {
    /**
     *
     * @type {any}
     * @memberof MentionSpamUpsertRequest
     */
    name: any;
    /**
     *
     * @type {AutomodEventType}
     * @memberof MentionSpamUpsertRequest
     */
    event_type: AutomodEventType;
    /**
     *
     * @type {any}
     * @memberof MentionSpamUpsertRequest
     */
    actions?: any;
    /**
     *
     * @type {any}
     * @memberof MentionSpamUpsertRequest
     */
    enabled?: any;
    /**
     *
     * @type {any}
     * @memberof MentionSpamUpsertRequest
     */
    exempt_roles?: any;
    /**
     *
     * @type {any}
     * @memberof MentionSpamUpsertRequest
     */
    exempt_channels?: any;
    /**
     *
     * @type {AutomodTriggerType}
     * @memberof MentionSpamUpsertRequest
     */
    trigger_type: AutomodTriggerType;
    /**
     *
     * @type {MentionSpamUpsertRequestTriggerMetadata}
     * @memberof MentionSpamUpsertRequest
     */
    trigger_metadata?: MentionSpamUpsertRequestTriggerMetadata;
}

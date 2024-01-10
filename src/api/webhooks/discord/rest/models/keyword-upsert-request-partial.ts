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
import { KeywordUpsertRequestTriggerMetadata } from "./keyword-upsert-request-trigger-metadata";

/**
 *
 * @export
 * @interface KeywordUpsertRequestPartial
 */
export interface KeywordUpsertRequestPartial {
    /**
     *
     * @type {any}
     * @memberof KeywordUpsertRequestPartial
     */
    name?: any;
    /**
     *
     * @type {AutomodEventType}
     * @memberof KeywordUpsertRequestPartial
     */
    event_type?: AutomodEventType;
    /**
     *
     * @type {any}
     * @memberof KeywordUpsertRequestPartial
     */
    actions?: any;
    /**
     *
     * @type {any}
     * @memberof KeywordUpsertRequestPartial
     */
    enabled?: any;
    /**
     *
     * @type {any}
     * @memberof KeywordUpsertRequestPartial
     */
    exempt_roles?: any;
    /**
     *
     * @type {any}
     * @memberof KeywordUpsertRequestPartial
     */
    exempt_channels?: any;
    /**
     *
     * @type {AutomodTriggerType}
     * @memberof KeywordUpsertRequestPartial
     */
    trigger_type?: AutomodTriggerType;
    /**
     *
     * @type {KeywordUpsertRequestTriggerMetadata}
     * @memberof KeywordUpsertRequestPartial
     */
    trigger_metadata?: KeywordUpsertRequestTriggerMetadata;
}

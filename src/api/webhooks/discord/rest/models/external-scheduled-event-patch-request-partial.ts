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
import { BasicMessageResponseApplicationId } from "./basic-message-response-application-id";
// May contain unused imports in some cases
// @ts-ignore
import { EntityMetadataExternal } from "./entity-metadata-external";
// May contain unused imports in some cases
// @ts-ignore
import { ExternalScheduledEventPatchRequestPartialEntityType } from "./external-scheduled-event-patch-request-partial-entity-type";
// May contain unused imports in some cases
// @ts-ignore
import { ExternalScheduledEventPatchRequestPartialStatus } from "./external-scheduled-event-patch-request-partial-status";
// May contain unused imports in some cases
// @ts-ignore
import { GuildScheduledEventPrivacyLevels } from "./guild-scheduled-event-privacy-levels";

/**
 *
 * @export
 * @interface ExternalScheduledEventPatchRequestPartial
 */
export interface ExternalScheduledEventPatchRequestPartial {
    /**
     *
     * @type {ExternalScheduledEventPatchRequestPartialStatus}
     * @memberof ExternalScheduledEventPatchRequestPartial
     */
    status?: ExternalScheduledEventPatchRequestPartialStatus;
    /**
     *
     * @type {any}
     * @memberof ExternalScheduledEventPatchRequestPartial
     */
    name?: any;
    /**
     *
     * @type {any}
     * @memberof ExternalScheduledEventPatchRequestPartial
     */
    description?: any;
    /**
     *
     * @type {any}
     * @memberof ExternalScheduledEventPatchRequestPartial
     */
    image?: any;
    /**
     *
     * @type {any}
     * @memberof ExternalScheduledEventPatchRequestPartial
     */
    scheduled_start_time?: any;
    /**
     *
     * @type {any}
     * @memberof ExternalScheduledEventPatchRequestPartial
     */
    scheduled_end_time?: any;
    /**
     *
     * @type {ExternalScheduledEventPatchRequestPartialEntityType}
     * @memberof ExternalScheduledEventPatchRequestPartial
     */
    entity_type?: ExternalScheduledEventPatchRequestPartialEntityType;
    /**
     *
     * @type {GuildScheduledEventPrivacyLevels}
     * @memberof ExternalScheduledEventPatchRequestPartial
     */
    privacy_level?: GuildScheduledEventPrivacyLevels;
    /**
     *
     * @type {BasicMessageResponseApplicationId}
     * @memberof ExternalScheduledEventPatchRequestPartial
     */
    channel_id?: BasicMessageResponseApplicationId;
    /**
     *
     * @type {EntityMetadataExternal}
     * @memberof ExternalScheduledEventPatchRequestPartial
     */
    entity_metadata?: EntityMetadataExternal;
}

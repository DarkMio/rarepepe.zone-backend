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
import { ExternalScheduledEventPatchRequestPartialStatus } from "./external-scheduled-event-patch-request-partial-status";
// May contain unused imports in some cases
// @ts-ignore
import { GuildScheduledEventPrivacyLevels } from "./guild-scheduled-event-privacy-levels";
// May contain unused imports in some cases
// @ts-ignore
import { VoiceScheduledEventCreateRequestEntityMetadata } from "./voice-scheduled-event-create-request-entity-metadata";
// May contain unused imports in some cases
// @ts-ignore
import { VoiceScheduledEventPatchRequestPartialEntityType } from "./voice-scheduled-event-patch-request-partial-entity-type";

/**
 *
 * @export
 * @interface VoiceScheduledEventPatchRequestPartial
 */
export interface VoiceScheduledEventPatchRequestPartial {
    /**
     *
     * @type {ExternalScheduledEventPatchRequestPartialStatus}
     * @memberof VoiceScheduledEventPatchRequestPartial
     */
    status?: ExternalScheduledEventPatchRequestPartialStatus;
    /**
     *
     * @type {any}
     * @memberof VoiceScheduledEventPatchRequestPartial
     */
    name?: any;
    /**
     *
     * @type {any}
     * @memberof VoiceScheduledEventPatchRequestPartial
     */
    description?: any;
    /**
     *
     * @type {any}
     * @memberof VoiceScheduledEventPatchRequestPartial
     */
    image?: any;
    /**
     *
     * @type {any}
     * @memberof VoiceScheduledEventPatchRequestPartial
     */
    scheduled_start_time?: any;
    /**
     *
     * @type {any}
     * @memberof VoiceScheduledEventPatchRequestPartial
     */
    scheduled_end_time?: any;
    /**
     *
     * @type {VoiceScheduledEventPatchRequestPartialEntityType}
     * @memberof VoiceScheduledEventPatchRequestPartial
     */
    entity_type?: VoiceScheduledEventPatchRequestPartialEntityType;
    /**
     *
     * @type {GuildScheduledEventPrivacyLevels}
     * @memberof VoiceScheduledEventPatchRequestPartial
     */
    privacy_level?: GuildScheduledEventPrivacyLevels;
    /**
     *
     * @type {BasicMessageResponseApplicationId}
     * @memberof VoiceScheduledEventPatchRequestPartial
     */
    channel_id?: BasicMessageResponseApplicationId;
    /**
     *
     * @type {VoiceScheduledEventCreateRequestEntityMetadata}
     * @memberof VoiceScheduledEventPatchRequestPartial
     */
    entity_metadata?: VoiceScheduledEventCreateRequestEntityMetadata;
}

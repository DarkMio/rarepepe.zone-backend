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
import { UpdateSelfVoiceStateRequestChannelId } from "./update-self-voice-state-request-channel-id";

/**
 *
 * @export
 * @interface UpdateSelfVoiceStateRequest
 */
export interface UpdateSelfVoiceStateRequest {
    /**
     *
     * @type {string}
     * @memberof UpdateSelfVoiceStateRequest
     */
    request_to_speak_timestamp?: string | null;
    /**
     *
     * @type {boolean}
     * @memberof UpdateSelfVoiceStateRequest
     */
    suppress?: boolean | null;
    /**
     *
     * @type {UpdateSelfVoiceStateRequestChannelId}
     * @memberof UpdateSelfVoiceStateRequest
     */
    channel_id?: UpdateSelfVoiceStateRequestChannelId | null;
}

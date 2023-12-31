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
 * @interface AddGuildMemberRequest
 */
export interface AddGuildMemberRequest {
  /**
   *
   * @type {string}
   * @memberof AddGuildMemberRequest
   */
  nick?: string | null;
  /**
   *
   * @type {Array<UpdateSelfVoiceStateRequestChannelId>}
   * @memberof AddGuildMemberRequest
   */
  roles?: Array<UpdateSelfVoiceStateRequestChannelId>;
  /**
   *
   * @type {boolean}
   * @memberof AddGuildMemberRequest
   */
  mute?: boolean | null;
  /**
   *
   * @type {boolean}
   * @memberof AddGuildMemberRequest
   */
  deaf?: boolean | null;
  /**
   *
   * @type {string}
   * @memberof AddGuildMemberRequest
   */
  access_token: string;
  /**
   *
   * @type {number}
   * @memberof AddGuildMemberRequest
   */
  flags?: number | null;
}

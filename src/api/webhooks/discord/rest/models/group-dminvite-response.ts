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
import { ChannelFollowerWebhookResponseUser } from "./channel-follower-webhook-response-user";
// May contain unused imports in some cases
// @ts-ignore
import { FriendInviteResponseChannel } from "./friend-invite-response-channel";
// May contain unused imports in some cases
// @ts-ignore
import { GroupDMInviteResponseType } from "./group-dminvite-response-type";

/**
 *
 * @export
 * @interface GroupDMInviteResponse
 */
export interface GroupDMInviteResponse {
  /**
   *
   * @type {GroupDMInviteResponseType}
   * @memberof GroupDMInviteResponse
   */
  type?: GroupDMInviteResponseType;
  /**
   *
   * @type {any}
   * @memberof GroupDMInviteResponse
   */
  code: any;
  /**
   *
   * @type {ChannelFollowerWebhookResponseUser}
   * @memberof GroupDMInviteResponse
   */
  inviter?: ChannelFollowerWebhookResponseUser;
  /**
   *
   * @type {any}
   * @memberof GroupDMInviteResponse
   */
  max_age?: any;
  /**
   *
   * @type {any}
   * @memberof GroupDMInviteResponse
   */
  created_at?: any;
  /**
   *
   * @type {any}
   * @memberof GroupDMInviteResponse
   */
  expires_at?: any;
  /**
   *
   * @type {FriendInviteResponseChannel}
   * @memberof GroupDMInviteResponse
   */
  channel?: FriendInviteResponseChannel;
  /**
   *
   * @type {any}
   * @memberof GroupDMInviteResponse
   */
  approximate_member_count?: any;
}

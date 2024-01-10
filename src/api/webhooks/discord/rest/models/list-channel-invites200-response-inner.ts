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
import { ChannelFollowerWebhookResponseUser } from "./channel-follower-webhook-response-user";
// May contain unused imports in some cases
// @ts-ignore
import { FriendInviteResponse } from "./friend-invite-response";
// May contain unused imports in some cases
// @ts-ignore
import { FriendInviteResponseChannel } from "./friend-invite-response-channel";
// May contain unused imports in some cases
// @ts-ignore
import { GroupDMInviteResponse } from "./group-dminvite-response";
// May contain unused imports in some cases
// @ts-ignore
import { GuildInviteResponse } from "./guild-invite-response";
// May contain unused imports in some cases
// @ts-ignore
import { GuildInviteResponseGuild } from "./guild-invite-response-guild";
// May contain unused imports in some cases
// @ts-ignore
import { GuildInviteResponseGuildScheduledEvent } from "./guild-invite-response-guild-scheduled-event";
// May contain unused imports in some cases
// @ts-ignore
import { GuildInviteResponseStageInstance } from "./guild-invite-response-stage-instance";
// May contain unused imports in some cases
// @ts-ignore
import { GuildInviteResponseTargetApplication } from "./guild-invite-response-target-application";
// May contain unused imports in some cases
// @ts-ignore
import { GuildInviteResponseTargetType } from "./guild-invite-response-target-type";
// May contain unused imports in some cases
// @ts-ignore
import { GuildInviteResponseType } from "./guild-invite-response-type";

/**
 *
 * @export
 * @interface ListChannelInvites200ResponseInner
 */
export interface ListChannelInvites200ResponseInner {
    /**
     *
     * @type {GuildInviteResponseType}
     * @memberof ListChannelInvites200ResponseInner
     */
    type?: GuildInviteResponseType;
    /**
     *
     * @type {any}
     * @memberof ListChannelInvites200ResponseInner
     */
    code: any;
    /**
     *
     * @type {ChannelFollowerWebhookResponseUser}
     * @memberof ListChannelInvites200ResponseInner
     */
    inviter?: ChannelFollowerWebhookResponseUser;
    /**
     *
     * @type {any}
     * @memberof ListChannelInvites200ResponseInner
     */
    max_age?: any;
    /**
     *
     * @type {any}
     * @memberof ListChannelInvites200ResponseInner
     */
    created_at?: any;
    /**
     *
     * @type {any}
     * @memberof ListChannelInvites200ResponseInner
     */
    expires_at?: any;
    /**
     *
     * @type {any}
     * @memberof ListChannelInvites200ResponseInner
     */
    friends_count?: any;
    /**
     *
     * @type {FriendInviteResponseChannel}
     * @memberof ListChannelInvites200ResponseInner
     */
    channel?: FriendInviteResponseChannel;
    /**
     *
     * @type {any}
     * @memberof ListChannelInvites200ResponseInner
     */
    is_contact?: any;
    /**
     *
     * @type {any}
     * @memberof ListChannelInvites200ResponseInner
     */
    uses?: any;
    /**
     *
     * @type {any}
     * @memberof ListChannelInvites200ResponseInner
     */
    max_uses?: any;
    /**
     *
     * @type {any}
     * @memberof ListChannelInvites200ResponseInner
     */
    flags?: any;
    /**
     *
     * @type {any}
     * @memberof ListChannelInvites200ResponseInner
     */
    approximate_member_count?: any;
    /**
     *
     * @type {GuildInviteResponseGuild}
     * @memberof ListChannelInvites200ResponseInner
     */
    guild?: GuildInviteResponseGuild;
    /**
     *
     * @type {BasicMessageResponseApplicationId}
     * @memberof ListChannelInvites200ResponseInner
     */
    guild_id?: BasicMessageResponseApplicationId;
    /**
     *
     * @type {GuildInviteResponseStageInstance}
     * @memberof ListChannelInvites200ResponseInner
     */
    stage_instance?: GuildInviteResponseStageInstance;
    /**
     *
     * @type {GuildInviteResponseTargetType}
     * @memberof ListChannelInvites200ResponseInner
     */
    target_type?: GuildInviteResponseTargetType;
    /**
     *
     * @type {ChannelFollowerWebhookResponseUser}
     * @memberof ListChannelInvites200ResponseInner
     */
    target_user?: ChannelFollowerWebhookResponseUser;
    /**
     *
     * @type {GuildInviteResponseTargetApplication}
     * @memberof ListChannelInvites200ResponseInner
     */
    target_application?: GuildInviteResponseTargetApplication;
    /**
     *
     * @type {GuildInviteResponseGuildScheduledEvent}
     * @memberof ListChannelInvites200ResponseInner
     */
    guild_scheduled_event?: GuildInviteResponseGuildScheduledEvent;
    /**
     *
     * @type {any}
     * @memberof ListChannelInvites200ResponseInner
     */
    temporary?: any;
    /**
     *
     * @type {any}
     * @memberof ListChannelInvites200ResponseInner
     */
    approximate_presence_count?: any;
}

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
import { ApplicationOAuth2ParamsResponse } from "./application-oauth2-params-response";
// May contain unused imports in some cases
// @ts-ignore
import { ApplicationTypes } from "./application-types";
// May contain unused imports in some cases
// @ts-ignore
import { UpdateSelfVoiceStateRequestChannelId } from "./update-self-voice-state-request-channel-id";
// May contain unused imports in some cases
// @ts-ignore
import { UserResponse } from "./user-response";

/**
 *
 * @export
 * @interface InviteApplicationResponse
 */
export interface InviteApplicationResponse {
    /**
     *
     * @type {any}
     * @memberof InviteApplicationResponse
     */
    id: any;
    /**
     *
     * @type {string}
     * @memberof InviteApplicationResponse
     */
    name: string | null;
    /**
     *
     * @type {string}
     * @memberof InviteApplicationResponse
     */
    icon?: string | null;
    /**
     *
     * @type {string}
     * @memberof InviteApplicationResponse
     */
    description: string | null;
    /**
     *
     * @type {ApplicationTypes}
     * @memberof InviteApplicationResponse
     */
    type?: ApplicationTypes | null;
    /**
     *
     * @type {string}
     * @memberof InviteApplicationResponse
     */
    cover_image?: string | null;
    /**
     *
     * @type {UpdateSelfVoiceStateRequestChannelId}
     * @memberof InviteApplicationResponse
     */
    primary_sku_id?: UpdateSelfVoiceStateRequestChannelId | null;
    /**
     *
     * @type {UserResponse}
     * @memberof InviteApplicationResponse
     */
    bot?: UserResponse | null;
    /**
     *
     * @type {string}
     * @memberof InviteApplicationResponse
     */
    slug?: string | null;
    /**
     *
     * @type {UpdateSelfVoiceStateRequestChannelId}
     * @memberof InviteApplicationResponse
     */
    guild_id?: UpdateSelfVoiceStateRequestChannelId | null;
    /**
     *
     * @type {Array<string>}
     * @memberof InviteApplicationResponse
     */
    rpc_origins?: Array<string>;
    /**
     *
     * @type {boolean}
     * @memberof InviteApplicationResponse
     */
    bot_public?: boolean | null;
    /**
     *
     * @type {boolean}
     * @memberof InviteApplicationResponse
     */
    bot_require_code_grant?: boolean | null;
    /**
     *
     * @type {string}
     * @memberof InviteApplicationResponse
     */
    terms_of_service_url?: string | null;
    /**
     *
     * @type {string}
     * @memberof InviteApplicationResponse
     */
    privacy_policy_url?: string | null;
    /**
     *
     * @type {string}
     * @memberof InviteApplicationResponse
     */
    custom_install_url?: string | null;
    /**
     *
     * @type {ApplicationOAuth2ParamsResponse}
     * @memberof InviteApplicationResponse
     */
    install_params?: ApplicationOAuth2ParamsResponse | null;
    /**
     *
     * @type {string}
     * @memberof InviteApplicationResponse
     */
    verify_key: string | null;
    /**
     *
     * @type {number}
     * @memberof InviteApplicationResponse
     */
    flags: number;
    /**
     *
     * @type {number}
     * @memberof InviteApplicationResponse
     */
    max_participants?: number | null;
    /**
     *
     * @type {Array<string>}
     * @memberof InviteApplicationResponse
     */
    tags?: Array<string>;
}

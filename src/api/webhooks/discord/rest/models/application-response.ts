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
import { ApplicationOAuth2ParamsResponse } from './application-oauth2-params-response';
// May contain unused imports in some cases
// @ts-ignore
import { ApplicationTypes } from './application-types';
// May contain unused imports in some cases
// @ts-ignore
import { UpdateSelfVoiceStateRequestChannelId } from './update-self-voice-state-request-channel-id';
// May contain unused imports in some cases
// @ts-ignore
import { UserResponse } from './user-response';

/**
 * 
 * @export
 * @interface ApplicationResponse
 */
export interface ApplicationResponse {
    /**
     * 
     * @type {any}
     * @memberof ApplicationResponse
     */
    'id': any;
    /**
     * 
     * @type {string}
     * @memberof ApplicationResponse
     */
    'name': string | null;
    /**
     * 
     * @type {string}
     * @memberof ApplicationResponse
     */
    'icon'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ApplicationResponse
     */
    'description': string | null;
    /**
     * 
     * @type {ApplicationTypes}
     * @memberof ApplicationResponse
     */
    'type'?: ApplicationTypes | null;
    /**
     * 
     * @type {string}
     * @memberof ApplicationResponse
     */
    'cover_image'?: string | null;
    /**
     * 
     * @type {UpdateSelfVoiceStateRequestChannelId}
     * @memberof ApplicationResponse
     */
    'primary_sku_id'?: UpdateSelfVoiceStateRequestChannelId | null;
    /**
     * 
     * @type {UserResponse}
     * @memberof ApplicationResponse
     */
    'bot'?: UserResponse | null;
    /**
     * 
     * @type {string}
     * @memberof ApplicationResponse
     */
    'slug'?: string | null;
    /**
     * 
     * @type {UpdateSelfVoiceStateRequestChannelId}
     * @memberof ApplicationResponse
     */
    'guild_id'?: UpdateSelfVoiceStateRequestChannelId | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof ApplicationResponse
     */
    'rpc_origins'?: Array<string>;
    /**
     * 
     * @type {boolean}
     * @memberof ApplicationResponse
     */
    'bot_public'?: boolean | null;
    /**
     * 
     * @type {boolean}
     * @memberof ApplicationResponse
     */
    'bot_require_code_grant'?: boolean | null;
    /**
     * 
     * @type {string}
     * @memberof ApplicationResponse
     */
    'terms_of_service_url'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ApplicationResponse
     */
    'privacy_policy_url'?: string | null;
    /**
     * 
     * @type {string}
     * @memberof ApplicationResponse
     */
    'custom_install_url'?: string | null;
    /**
     * 
     * @type {ApplicationOAuth2ParamsResponse}
     * @memberof ApplicationResponse
     */
    'install_params'?: ApplicationOAuth2ParamsResponse | null;
    /**
     * 
     * @type {string}
     * @memberof ApplicationResponse
     */
    'verify_key': string | null;
    /**
     * 
     * @type {number}
     * @memberof ApplicationResponse
     */
    'flags': number;
    /**
     * 
     * @type {number}
     * @memberof ApplicationResponse
     */
    'max_participants'?: number | null;
    /**
     * 
     * @type {Array<string>}
     * @memberof ApplicationResponse
     */
    'tags'?: Array<string>;
}

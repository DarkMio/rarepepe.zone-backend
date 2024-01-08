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
import { UserResponse } from './user-response';

/**
 * 
 * @export
 * @interface GuildMemberResponse
 */
export interface GuildMemberResponse {
    /**
     * 
     * @type {any}
     * @memberof GuildMemberResponse
     */
    'avatar'?: any;
    /**
     * 
     * @type {any}
     * @memberof GuildMemberResponse
     */
    'communication_disabled_until'?: any;
    /**
     * 
     * @type {any}
     * @memberof GuildMemberResponse
     */
    'flags': any;
    /**
     * 
     * @type {any}
     * @memberof GuildMemberResponse
     */
    'joined_at': any;
    /**
     * 
     * @type {any}
     * @memberof GuildMemberResponse
     */
    'nick'?: any;
    /**
     * 
     * @type {any}
     * @memberof GuildMemberResponse
     */
    'pending': any;
    /**
     * 
     * @type {any}
     * @memberof GuildMemberResponse
     */
    'premium_since'?: any;
    /**
     * 
     * @type {any}
     * @memberof GuildMemberResponse
     */
    'roles': any;
    /**
     * 
     * @type {UserResponse}
     * @memberof GuildMemberResponse
     */
    'user': UserResponse;
    /**
     * 
     * @type {any}
     * @memberof GuildMemberResponse
     */
    'mute': any;
    /**
     * 
     * @type {any}
     * @memberof GuildMemberResponse
     */
    'deaf': any;
}

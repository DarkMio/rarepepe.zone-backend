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
import { UserPIIResponsePremiumType } from './user-piiresponse-premium-type';

/**
 * 
 * @export
 * @interface UserResponse
 */
export interface UserResponse {
    /**
     * 
     * @type {any}
     * @memberof UserResponse
     */
    'id': any;
    /**
     * 
     * @type {any}
     * @memberof UserResponse
     */
    'username': any;
    /**
     * 
     * @type {any}
     * @memberof UserResponse
     */
    'avatar'?: any;
    /**
     * 
     * @type {any}
     * @memberof UserResponse
     */
    'discriminator': any;
    /**
     * 
     * @type {any}
     * @memberof UserResponse
     */
    'public_flags': any;
    /**
     * 
     * @type {UserPIIResponsePremiumType}
     * @memberof UserResponse
     */
    'premium_type'?: UserPIIResponsePremiumType;
    /**
     * 
     * @type {any}
     * @memberof UserResponse
     */
    'flags': any;
    /**
     * 
     * @type {any}
     * @memberof UserResponse
     */
    'bot'?: any;
    /**
     * 
     * @type {any}
     * @memberof UserResponse
     */
    'system'?: any;
    /**
     * 
     * @type {any}
     * @memberof UserResponse
     */
    'banner'?: any;
    /**
     * 
     * @type {any}
     * @memberof UserResponse
     */
    'accent_color'?: any;
    /**
     * 
     * @type {any}
     * @memberof UserResponse
     */
    'global_name'?: any;
}

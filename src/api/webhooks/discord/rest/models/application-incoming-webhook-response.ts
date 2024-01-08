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
// May contain unused imports in some cases
// @ts-ignore
import { WebhookTypes } from './webhook-types';

/**
 * 
 * @export
 * @interface ApplicationIncomingWebhookResponse
 */
export interface ApplicationIncomingWebhookResponse {
    /**
     * 
     * @type {any}
     * @memberof ApplicationIncomingWebhookResponse
     */
    'application_id'?: any;
    /**
     * 
     * @type {string}
     * @memberof ApplicationIncomingWebhookResponse
     */
    'avatar'?: string | null;
    /**
     * 
     * @type {any}
     * @memberof ApplicationIncomingWebhookResponse
     */
    'channel_id'?: any;
    /**
     * 
     * @type {any}
     * @memberof ApplicationIncomingWebhookResponse
     */
    'guild_id'?: any;
    /**
     * 
     * @type {any}
     * @memberof ApplicationIncomingWebhookResponse
     */
    'id': any;
    /**
     * 
     * @type {string}
     * @memberof ApplicationIncomingWebhookResponse
     */
    'name': string;
    /**
     * 
     * @type {WebhookTypes}
     * @memberof ApplicationIncomingWebhookResponse
     */
    'type': WebhookTypes;
    /**
     * 
     * @type {UserResponse}
     * @memberof ApplicationIncomingWebhookResponse
     */
    'user'?: UserResponse | null;
}

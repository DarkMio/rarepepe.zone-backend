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
import { ApplicationResponse } from "./application-response";
// May contain unused imports in some cases
// @ts-ignore
import { ChannelFollowerWebhookResponseUser } from "./channel-follower-webhook-response-user";

/**
 *
 * @export
 * @interface OAuth2GetAuthorizationResponse
 */
export interface OAuth2GetAuthorizationResponse {
    /**
     *
     * @type {ApplicationResponse}
     * @memberof OAuth2GetAuthorizationResponse
     */
    application: ApplicationResponse;
    /**
     *
     * @type {any}
     * @memberof OAuth2GetAuthorizationResponse
     */
    expires: any;
    /**
     *
     * @type {any}
     * @memberof OAuth2GetAuthorizationResponse
     */
    scopes: any;
    /**
     *
     * @type {ChannelFollowerWebhookResponseUser}
     * @memberof OAuth2GetAuthorizationResponse
     */
    user?: ChannelFollowerWebhookResponseUser;
}

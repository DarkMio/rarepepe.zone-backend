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
import { OAuth2Scopes } from "./oauth2-scopes";

/**
 *
 * @export
 * @interface ApplicationOAuth2Params
 */
export interface ApplicationOAuth2Params {
    /**
     *
     * @type {Array<OAuth2Scopes>}
     * @memberof ApplicationOAuth2Params
     */
    scopes?: Array<OAuth2Scopes>;
    /**
     *
     * @type {number}
     * @memberof ApplicationOAuth2Params
     */
    permissions?: number | null;
}

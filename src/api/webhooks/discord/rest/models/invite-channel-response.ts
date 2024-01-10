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
import { ChannelTypes } from "./channel-types";

/**
 *
 * @export
 * @interface InviteChannelResponse
 */
export interface InviteChannelResponse {
    /**
     *
     * @type {any}
     * @memberof InviteChannelResponse
     */
    id: any;
    /**
     *
     * @type {ChannelTypes}
     * @memberof InviteChannelResponse
     */
    type: ChannelTypes;
    /**
     *
     * @type {any}
     * @memberof InviteChannelResponse
     */
    name?: any;
    /**
     *
     * @type {any}
     * @memberof InviteChannelResponse
     */
    icon?: any;
    /**
     *
     * @type {any}
     * @memberof InviteChannelResponse
     */
    recipients?: any;
}

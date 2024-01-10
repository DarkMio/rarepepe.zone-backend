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
import { BaseCreateMessageCreateRequestAllowedMentions } from "./base-create-message-create-request-allowed-mentions";

/**
 *
 * @export
 * @interface BaseCreateMessageCreateRequest
 */
export interface BaseCreateMessageCreateRequest {
    /**
     *
     * @type {any}
     * @memberof BaseCreateMessageCreateRequest
     */
    content?: any;
    /**
     *
     * @type {any}
     * @memberof BaseCreateMessageCreateRequest
     */
    embeds?: any;
    /**
     *
     * @type {BaseCreateMessageCreateRequestAllowedMentions}
     * @memberof BaseCreateMessageCreateRequest
     */
    allowed_mentions?: BaseCreateMessageCreateRequestAllowedMentions;
    /**
     *
     * @type {any}
     * @memberof BaseCreateMessageCreateRequest
     */
    sticker_ids?: any;
    /**
     *
     * @type {any}
     * @memberof BaseCreateMessageCreateRequest
     */
    components?: any;
    /**
     *
     * @type {any}
     * @memberof BaseCreateMessageCreateRequest
     */
    flags?: any;
    /**
     *
     * @type {any}
     * @memberof BaseCreateMessageCreateRequest
     */
    attachments?: any;
}

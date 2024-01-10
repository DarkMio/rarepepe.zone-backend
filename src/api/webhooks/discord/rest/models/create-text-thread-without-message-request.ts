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
import { CreateForumThreadRequestAutoArchiveDuration } from "./create-forum-thread-request-auto-archive-duration";
// May contain unused imports in some cases
// @ts-ignore
import { CreateTextThreadWithoutMessageRequestType } from "./create-text-thread-without-message-request-type";

/**
 *
 * @export
 * @interface CreateTextThreadWithoutMessageRequest
 */
export interface CreateTextThreadWithoutMessageRequest {
    /**
     *
     * @type {any}
     * @memberof CreateTextThreadWithoutMessageRequest
     */
    name: any;
    /**
     *
     * @type {CreateForumThreadRequestAutoArchiveDuration}
     * @memberof CreateTextThreadWithoutMessageRequest
     */
    auto_archive_duration?: CreateForumThreadRequestAutoArchiveDuration;
    /**
     *
     * @type {any}
     * @memberof CreateTextThreadWithoutMessageRequest
     */
    rate_limit_per_user?: any;
    /**
     *
     * @type {CreateTextThreadWithoutMessageRequestType}
     * @memberof CreateTextThreadWithoutMessageRequest
     */
    type?: CreateTextThreadWithoutMessageRequestType;
    /**
     *
     * @type {any}
     * @memberof CreateTextThreadWithoutMessageRequest
     */
    invitable?: any;
}

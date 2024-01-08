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
import { AutomodActionType } from './automod-action-type';
// May contain unused imports in some cases
// @ts-ignore
import { BlockMessageActionMetadata } from './block-message-action-metadata';

/**
 * 
 * @export
 * @interface BlockMessageAction
 */
export interface BlockMessageAction {
    /**
     * 
     * @type {AutomodActionType}
     * @memberof BlockMessageAction
     */
    'type': AutomodActionType;
    /**
     * 
     * @type {BlockMessageActionMetadata}
     * @memberof BlockMessageAction
     */
    'metadata'?: BlockMessageActionMetadata;
}

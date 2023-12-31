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
import { ChannelPermissionOverwriteRequestType } from "./channel-permission-overwrite-request-type";

/**
 *
 * @export
 * @interface ChannelPermissionOverwriteRequest
 */
export interface ChannelPermissionOverwriteRequest {
  /**
   *
   * @type {any}
   * @memberof ChannelPermissionOverwriteRequest
   */
  id: any;
  /**
   *
   * @type {ChannelPermissionOverwriteRequestType}
   * @memberof ChannelPermissionOverwriteRequest
   */
  type?: ChannelPermissionOverwriteRequestType;
  /**
   *
   * @type {any}
   * @memberof ChannelPermissionOverwriteRequest
   */
  allow?: any;
  /**
   *
   * @type {any}
   * @memberof ChannelPermissionOverwriteRequest
   */
  deny?: any;
}

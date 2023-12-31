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
import { BasicMessageResponseApplicationId } from "./basic-message-response-application-id";
// May contain unused imports in some cases
// @ts-ignore
import { ChannelTypes } from "./channel-types";

/**
 *
 * @export
 * @interface PrivateGroupChannelResponse
 */
export interface PrivateGroupChannelResponse {
  /**
   *
   * @type {any}
   * @memberof PrivateGroupChannelResponse
   */
  id: any;
  /**
   *
   * @type {ChannelTypes}
   * @memberof PrivateGroupChannelResponse
   */
  type: ChannelTypes;
  /**
   *
   * @type {BasicMessageResponseApplicationId}
   * @memberof PrivateGroupChannelResponse
   */
  last_message_id?: BasicMessageResponseApplicationId;
  /**
   *
   * @type {any}
   * @memberof PrivateGroupChannelResponse
   */
  flags: any;
  /**
   *
   * @type {any}
   * @memberof PrivateGroupChannelResponse
   */
  last_pin_timestamp?: any;
  /**
   *
   * @type {any}
   * @memberof PrivateGroupChannelResponse
   */
  recipients: any;
  /**
   *
   * @type {any}
   * @memberof PrivateGroupChannelResponse
   */
  name?: any;
  /**
   *
   * @type {any}
   * @memberof PrivateGroupChannelResponse
   */
  icon?: any;
  /**
   *
   * @type {BasicMessageResponseApplicationId}
   * @memberof PrivateGroupChannelResponse
   */
  owner_id?: BasicMessageResponseApplicationId;
  /**
   *
   * @type {any}
   * @memberof PrivateGroupChannelResponse
   */
  managed?: any;
  /**
   *
   * @type {BasicMessageResponseApplicationId}
   * @memberof PrivateGroupChannelResponse
   */
  application_id?: BasicMessageResponseApplicationId;
}

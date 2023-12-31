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
 * @interface IncomingWebhookUpdateRequestPartial
 */
export interface IncomingWebhookUpdateRequestPartial {
  /**
   *
   * @type {any}
   * @memberof IncomingWebhookUpdateRequestPartial
   */
  content?: any;
  /**
   *
   * @type {any}
   * @memberof IncomingWebhookUpdateRequestPartial
   */
  embeds?: any;
  /**
   *
   * @type {BaseCreateMessageCreateRequestAllowedMentions}
   * @memberof IncomingWebhookUpdateRequestPartial
   */
  allowed_mentions?: BaseCreateMessageCreateRequestAllowedMentions;
  /**
   *
   * @type {any}
   * @memberof IncomingWebhookUpdateRequestPartial
   */
  components?: any;
  /**
   *
   * @type {any}
   * @memberof IncomingWebhookUpdateRequestPartial
   */
  attachments?: any;
  /**
   *
   * @type {number}
   * @memberof IncomingWebhookUpdateRequestPartial
   */
  flags?: number | null;
}

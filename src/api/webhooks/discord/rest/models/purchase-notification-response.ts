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
import { PurchaseNotificationResponseGuildProductPurchase } from "./purchase-notification-response-guild-product-purchase";

/**
 *
 * @export
 * @interface PurchaseNotificationResponse
 */
export interface PurchaseNotificationResponse {
  /**
   *
   * @type {number}
   * @memberof PurchaseNotificationResponse
   */
  type: number;
  /**
   *
   * @type {PurchaseNotificationResponseGuildProductPurchase}
   * @memberof PurchaseNotificationResponse
   */
  guild_product_purchase?: PurchaseNotificationResponseGuildProductPurchase;
}

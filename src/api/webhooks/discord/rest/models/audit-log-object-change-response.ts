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

/**
 *
 * @export
 * @interface AuditLogObjectChangeResponse
 */
export interface AuditLogObjectChangeResponse {
  /**
   *
   * @type {string}
   * @memberof AuditLogObjectChangeResponse
   */
  key?: string | null;
  /**
   *
   * @type {any}
   * @memberof AuditLogObjectChangeResponse
   */
  new_value?: any;
  /**
   *
   * @type {any}
   * @memberof AuditLogObjectChangeResponse
   */
  old_value?: any;
}

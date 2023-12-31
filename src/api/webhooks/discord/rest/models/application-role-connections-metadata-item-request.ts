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
import { MetadataItemTypes } from "./metadata-item-types";

/**
 *
 * @export
 * @interface ApplicationRoleConnectionsMetadataItemRequest
 */
export interface ApplicationRoleConnectionsMetadataItemRequest {
  /**
   *
   * @type {MetadataItemTypes}
   * @memberof ApplicationRoleConnectionsMetadataItemRequest
   */
  type: MetadataItemTypes;
  /**
   *
   * @type {string}
   * @memberof ApplicationRoleConnectionsMetadataItemRequest
   */
  key: string;
  /**
   *
   * @type {string}
   * @memberof ApplicationRoleConnectionsMetadataItemRequest
   */
  name: string;
  /**
   *
   * @type {{ [key: string]: string | null; }}
   * @memberof ApplicationRoleConnectionsMetadataItemRequest
   */
  name_localizations?: { [key: string]: string | null };
  /**
   *
   * @type {string}
   * @memberof ApplicationRoleConnectionsMetadataItemRequest
   */
  description: string;
  /**
   *
   * @type {{ [key: string]: string | null; }}
   * @memberof ApplicationRoleConnectionsMetadataItemRequest
   */
  description_localizations?: { [key: string]: string | null };
}

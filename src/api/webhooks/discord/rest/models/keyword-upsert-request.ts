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
import { AutomodEventType } from "./automod-event-type";
// May contain unused imports in some cases
// @ts-ignore
import { AutomodTriggerType } from "./automod-trigger-type";
// May contain unused imports in some cases
// @ts-ignore
import { KeywordUpsertRequestTriggerMetadata } from "./keyword-upsert-request-trigger-metadata";

/**
 *
 * @export
 * @interface KeywordUpsertRequest
 */
export interface KeywordUpsertRequest {
  /**
   *
   * @type {any}
   * @memberof KeywordUpsertRequest
   */
  name: any;
  /**
   *
   * @type {AutomodEventType}
   * @memberof KeywordUpsertRequest
   */
  event_type: AutomodEventType;
  /**
   *
   * @type {any}
   * @memberof KeywordUpsertRequest
   */
  actions?: any;
  /**
   *
   * @type {any}
   * @memberof KeywordUpsertRequest
   */
  enabled?: any;
  /**
   *
   * @type {any}
   * @memberof KeywordUpsertRequest
   */
  exempt_roles?: any;
  /**
   *
   * @type {any}
   * @memberof KeywordUpsertRequest
   */
  exempt_channels?: any;
  /**
   *
   * @type {AutomodTriggerType}
   * @memberof KeywordUpsertRequest
   */
  trigger_type: AutomodTriggerType;
  /**
   *
   * @type {KeywordUpsertRequestTriggerMetadata}
   * @memberof KeywordUpsertRequest
   */
  trigger_metadata?: KeywordUpsertRequestTriggerMetadata;
}

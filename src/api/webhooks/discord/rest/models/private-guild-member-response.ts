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
import { UserResponse } from "./user-response";

/**
 *
 * @export
 * @interface PrivateGuildMemberResponse
 */
export interface PrivateGuildMemberResponse {
  /**
   *
   * @type {any}
   * @memberof PrivateGuildMemberResponse
   */
  avatar?: any;
  /**
   *
   * @type {any}
   * @memberof PrivateGuildMemberResponse
   */
  communication_disabled_until?: any;
  /**
   *
   * @type {any}
   * @memberof PrivateGuildMemberResponse
   */
  flags: any;
  /**
   *
   * @type {any}
   * @memberof PrivateGuildMemberResponse
   */
  joined_at: any;
  /**
   *
   * @type {any}
   * @memberof PrivateGuildMemberResponse
   */
  nick?: any;
  /**
   *
   * @type {any}
   * @memberof PrivateGuildMemberResponse
   */
  pending: any;
  /**
   *
   * @type {any}
   * @memberof PrivateGuildMemberResponse
   */
  premium_since?: any;
  /**
   *
   * @type {any}
   * @memberof PrivateGuildMemberResponse
   */
  roles: any;
  /**
   *
   * @type {UserResponse}
   * @memberof PrivateGuildMemberResponse
   */
  user: UserResponse;
  /**
   *
   * @type {any}
   * @memberof PrivateGuildMemberResponse
   */
  mute: any;
  /**
   *
   * @type {any}
   * @memberof PrivateGuildMemberResponse
   */
  deaf: any;
  /**
   *
   * @type {any}
   * @memberof PrivateGuildMemberResponse
   */
  banner?: any;
}

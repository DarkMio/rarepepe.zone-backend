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
import { ApplicationCommandOptionNumberChoiceResponse } from "./application-command-option-number-choice-response";
// May contain unused imports in some cases
// @ts-ignore
import { ApplicationCommandOptionType } from "./application-command-option-type";

/**
 *
 * @export
 * @interface ApplicationCommandNumberOptionResponse
 */
export interface ApplicationCommandNumberOptionResponse {
  /**
   *
   * @type {ApplicationCommandOptionType}
   * @memberof ApplicationCommandNumberOptionResponse
   */
  type: ApplicationCommandOptionType | null;
  /**
   *
   * @type {string}
   * @memberof ApplicationCommandNumberOptionResponse
   */
  name: string;
  /**
   *
   * @type {string}
   * @memberof ApplicationCommandNumberOptionResponse
   */
  name_localized?: string | null;
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof ApplicationCommandNumberOptionResponse
   */
  name_localizations?: { [key: string]: string };
  /**
   *
   * @type {string}
   * @memberof ApplicationCommandNumberOptionResponse
   */
  description: string;
  /**
   *
   * @type {string}
   * @memberof ApplicationCommandNumberOptionResponse
   */
  description_localized?: string | null;
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof ApplicationCommandNumberOptionResponse
   */
  description_localizations?: { [key: string]: string };
  /**
   *
   * @type {boolean}
   * @memberof ApplicationCommandNumberOptionResponse
   */
  required?: boolean | null;
  /**
   *
   * @type {boolean}
   * @memberof ApplicationCommandNumberOptionResponse
   */
  autocomplete?: boolean | null;
  /**
   *
   * @type {Array<ApplicationCommandOptionNumberChoiceResponse>}
   * @memberof ApplicationCommandNumberOptionResponse
   */
  choices?: Array<ApplicationCommandOptionNumberChoiceResponse>;
  /**
   *
   * @type {number}
   * @memberof ApplicationCommandNumberOptionResponse
   */
  min_value?: number | null;
  /**
   *
   * @type {number}
   * @memberof ApplicationCommandNumberOptionResponse
   */
  max_value?: number | null;
}

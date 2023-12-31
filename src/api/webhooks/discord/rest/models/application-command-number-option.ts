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
import { ApplicationCommandOptionNumberChoice } from "./application-command-option-number-choice";
// May contain unused imports in some cases
// @ts-ignore
import { ApplicationCommandOptionType } from "./application-command-option-type";

/**
 *
 * @export
 * @interface ApplicationCommandNumberOption
 */
export interface ApplicationCommandNumberOption {
  /**
   *
   * @type {ApplicationCommandOptionType}
   * @memberof ApplicationCommandNumberOption
   */
  type: ApplicationCommandOptionType | null;
  /**
   *
   * @type {string}
   * @memberof ApplicationCommandNumberOption
   */
  name: string;
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof ApplicationCommandNumberOption
   */
  name_localizations?: { [key: string]: string };
  /**
   *
   * @type {string}
   * @memberof ApplicationCommandNumberOption
   */
  description: string;
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof ApplicationCommandNumberOption
   */
  description_localizations?: { [key: string]: string };
  /**
   *
   * @type {boolean}
   * @memberof ApplicationCommandNumberOption
   */
  required?: boolean | null;
  /**
   *
   * @type {boolean}
   * @memberof ApplicationCommandNumberOption
   */
  autocomplete?: boolean | null;
  /**
   *
   * @type {Array<ApplicationCommandOptionNumberChoice>}
   * @memberof ApplicationCommandNumberOption
   */
  choices?: Array<ApplicationCommandOptionNumberChoice>;
  /**
   *
   * @type {number}
   * @memberof ApplicationCommandNumberOption
   */
  min_value?: number | null;
  /**
   *
   * @type {number}
   * @memberof ApplicationCommandNumberOption
   */
  max_value?: number | null;
}

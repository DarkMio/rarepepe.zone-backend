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
import { ApplicationCommandOptionType } from "./application-command-option-type";
// May contain unused imports in some cases
// @ts-ignore
import { ApplicationCommandSubcommandOptionResponseOptionsInner } from "./application-command-subcommand-option-response-options-inner";

/**
 *
 * @export
 * @interface ApplicationCommandSubcommandOptionResponse
 */
export interface ApplicationCommandSubcommandOptionResponse {
  /**
   *
   * @type {ApplicationCommandOptionType}
   * @memberof ApplicationCommandSubcommandOptionResponse
   */
  type: ApplicationCommandOptionType | null;
  /**
   *
   * @type {string}
   * @memberof ApplicationCommandSubcommandOptionResponse
   */
  name: string;
  /**
   *
   * @type {string}
   * @memberof ApplicationCommandSubcommandOptionResponse
   */
  name_localized?: string | null;
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof ApplicationCommandSubcommandOptionResponse
   */
  name_localizations?: { [key: string]: string };
  /**
   *
   * @type {string}
   * @memberof ApplicationCommandSubcommandOptionResponse
   */
  description: string;
  /**
   *
   * @type {string}
   * @memberof ApplicationCommandSubcommandOptionResponse
   */
  description_localized?: string | null;
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof ApplicationCommandSubcommandOptionResponse
   */
  description_localizations?: { [key: string]: string };
  /**
   *
   * @type {boolean}
   * @memberof ApplicationCommandSubcommandOptionResponse
   */
  required?: boolean | null;
  /**
   *
   * @type {Array<ApplicationCommandSubcommandOptionResponseOptionsInner>}
   * @memberof ApplicationCommandSubcommandOptionResponse
   */
  options?: Array<ApplicationCommandSubcommandOptionResponseOptionsInner>;
}

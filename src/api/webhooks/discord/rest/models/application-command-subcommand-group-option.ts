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
import { ApplicationCommandSubcommandOption } from "./application-command-subcommand-option";

/**
 *
 * @export
 * @interface ApplicationCommandSubcommandGroupOption
 */
export interface ApplicationCommandSubcommandGroupOption {
  /**
   *
   * @type {ApplicationCommandOptionType}
   * @memberof ApplicationCommandSubcommandGroupOption
   */
  type: ApplicationCommandOptionType | null;
  /**
   *
   * @type {string}
   * @memberof ApplicationCommandSubcommandGroupOption
   */
  name: string;
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof ApplicationCommandSubcommandGroupOption
   */
  name_localizations?: { [key: string]: string };
  /**
   *
   * @type {string}
   * @memberof ApplicationCommandSubcommandGroupOption
   */
  description: string;
  /**
   *
   * @type {{ [key: string]: string; }}
   * @memberof ApplicationCommandSubcommandGroupOption
   */
  description_localizations?: { [key: string]: string };
  /**
   *
   * @type {boolean}
   * @memberof ApplicationCommandSubcommandGroupOption
   */
  required?: boolean | null;
  /**
   *
   * @type {Array<ApplicationCommandSubcommandOption>}
   * @memberof ApplicationCommandSubcommandGroupOption
   */
  options?: Array<ApplicationCommandSubcommandOption>;
}

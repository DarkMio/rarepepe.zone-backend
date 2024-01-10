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
import { ApplicationCommandSubcommandOptionOptionsInner } from "./application-command-subcommand-option-options-inner";

/**
 *
 * @export
 * @interface ApplicationCommandSubcommandOption
 */
export interface ApplicationCommandSubcommandOption {
    /**
     *
     * @type {ApplicationCommandOptionType}
     * @memberof ApplicationCommandSubcommandOption
     */
    type: ApplicationCommandOptionType | null;
    /**
     *
     * @type {string}
     * @memberof ApplicationCommandSubcommandOption
     */
    name: string;
    /**
     *
     * @type {{ [key: string]: string; }}
     * @memberof ApplicationCommandSubcommandOption
     */
    name_localizations?: { [key: string]: string };
    /**
     *
     * @type {string}
     * @memberof ApplicationCommandSubcommandOption
     */
    description: string;
    /**
     *
     * @type {{ [key: string]: string; }}
     * @memberof ApplicationCommandSubcommandOption
     */
    description_localizations?: { [key: string]: string };
    /**
     *
     * @type {boolean}
     * @memberof ApplicationCommandSubcommandOption
     */
    required?: boolean | null;
    /**
     *
     * @type {Array<ApplicationCommandSubcommandOptionOptionsInner>}
     * @memberof ApplicationCommandSubcommandOption
     */
    options?: Array<ApplicationCommandSubcommandOptionOptionsInner>;
}

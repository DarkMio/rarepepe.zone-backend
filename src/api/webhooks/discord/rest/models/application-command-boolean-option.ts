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

/**
 *
 * @export
 * @interface ApplicationCommandBooleanOption
 */
export interface ApplicationCommandBooleanOption {
    /**
     *
     * @type {ApplicationCommandOptionType}
     * @memberof ApplicationCommandBooleanOption
     */
    type: ApplicationCommandOptionType | null;
    /**
     *
     * @type {string}
     * @memberof ApplicationCommandBooleanOption
     */
    name: string;
    /**
     *
     * @type {{ [key: string]: string; }}
     * @memberof ApplicationCommandBooleanOption
     */
    name_localizations?: { [key: string]: string };
    /**
     *
     * @type {string}
     * @memberof ApplicationCommandBooleanOption
     */
    description: string;
    /**
     *
     * @type {{ [key: string]: string; }}
     * @memberof ApplicationCommandBooleanOption
     */
    description_localizations?: { [key: string]: string };
    /**
     *
     * @type {boolean}
     * @memberof ApplicationCommandBooleanOption
     */
    required?: boolean | null;
}

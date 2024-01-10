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
 * @interface ApplicationCommandAttachmentOption
 */
export interface ApplicationCommandAttachmentOption {
    /**
     *
     * @type {ApplicationCommandOptionType}
     * @memberof ApplicationCommandAttachmentOption
     */
    type: ApplicationCommandOptionType | null;
    /**
     *
     * @type {string}
     * @memberof ApplicationCommandAttachmentOption
     */
    name: string;
    /**
     *
     * @type {{ [key: string]: string; }}
     * @memberof ApplicationCommandAttachmentOption
     */
    name_localizations?: { [key: string]: string };
    /**
     *
     * @type {string}
     * @memberof ApplicationCommandAttachmentOption
     */
    description: string;
    /**
     *
     * @type {{ [key: string]: string; }}
     * @memberof ApplicationCommandAttachmentOption
     */
    description_localizations?: { [key: string]: string };
    /**
     *
     * @type {boolean}
     * @memberof ApplicationCommandAttachmentOption
     */
    required?: boolean | null;
}

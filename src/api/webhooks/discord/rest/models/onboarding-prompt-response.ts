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
import { OnboardingPromptType } from "./onboarding-prompt-type";

/**
 *
 * @export
 * @interface OnboardingPromptResponse
 */
export interface OnboardingPromptResponse {
    /**
     *
     * @type {any}
     * @memberof OnboardingPromptResponse
     */
    id: any;
    /**
     *
     * @type {any}
     * @memberof OnboardingPromptResponse
     */
    title: any;
    /**
     *
     * @type {any}
     * @memberof OnboardingPromptResponse
     */
    options: any;
    /**
     *
     * @type {any}
     * @memberof OnboardingPromptResponse
     */
    single_select: any;
    /**
     *
     * @type {any}
     * @memberof OnboardingPromptResponse
     */
    required: any;
    /**
     *
     * @type {any}
     * @memberof OnboardingPromptResponse
     */
    in_onboarding: any;
    /**
     *
     * @type {OnboardingPromptType}
     * @memberof OnboardingPromptResponse
     */
    type: OnboardingPromptType;
}

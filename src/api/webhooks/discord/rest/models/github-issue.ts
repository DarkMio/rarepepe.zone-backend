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
import { GithubUser } from "./github-user";

/**
 *
 * @export
 * @interface GithubIssue
 */
export interface GithubIssue {
    /**
     *
     * @type {any}
     * @memberof GithubIssue
     */
    id: any;
    /**
     *
     * @type {any}
     * @memberof GithubIssue
     */
    number: any;
    /**
     *
     * @type {any}
     * @memberof GithubIssue
     */
    html_url: any;
    /**
     *
     * @type {GithubUser}
     * @memberof GithubIssue
     */
    user: GithubUser;
    /**
     *
     * @type {any}
     * @memberof GithubIssue
     */
    title: any;
    /**
     *
     * @type {any}
     * @memberof GithubIssue
     */
    body?: any;
    /**
     *
     * @type {any}
     * @memberof GithubIssue
     */
    pull_request?: any;
}

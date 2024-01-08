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
import { ApplicationCommandAutocompleteCallbackRequest } from './application-command-autocomplete-callback-request';
// May contain unused imports in some cases
// @ts-ignore
import { CreateMessageInteractionCallbackRequest } from './create-message-interaction-callback-request';
// May contain unused imports in some cases
// @ts-ignore
import { InteractionCallbackTypes } from './interaction-callback-types';
// May contain unused imports in some cases
// @ts-ignore
import { ModalInteractionCallbackRequest } from './modal-interaction-callback-request';
// May contain unused imports in some cases
// @ts-ignore
import { PongInteractionCallbackRequest } from './pong-interaction-callback-request';
// May contain unused imports in some cases
// @ts-ignore
import { UpdateMessageInteractionCallbackRequest } from './update-message-interaction-callback-request';
// May contain unused imports in some cases
// @ts-ignore
import { UpdateMessageInteractionCallbackRequestData } from './update-message-interaction-callback-request-data';

/**
 * 
 * @export
 * @interface CreateInteractionResponseRequest
 */
export interface CreateInteractionResponseRequest {
    /**
     * 
     * @type {InteractionCallbackTypes}
     * @memberof CreateInteractionResponseRequest
     */
    'type': InteractionCallbackTypes;
    /**
     * 
     * @type {UpdateMessageInteractionCallbackRequestData}
     * @memberof CreateInteractionResponseRequest
     */
    'data': UpdateMessageInteractionCallbackRequestData;
}

import { Environment } from "#/index";
import { loggerFactory } from "#/logging";
import {
  RESTPostAPIChatInputApplicationCommandsJSONBody,
  RESTPostAPIContextMenuApplicationCommandsJSONBody,
} from "discord-api-types/v10";
import { APIUnknownInteraction, AnyGatewayResult } from ".";
import { DiscordAPIClient } from "./apiClient";
import {
  ApplicationInteractionClient,
  AutocompleteInteractionClient,
  ComponentInteractionClient,
  ContextMenuInteractionClient,
  ModalInteractionClient,
  dispatchInteractionResponseClient,
} from "./pluginClient";
import { DiscordConfigFile } from "./config";

type BasePlugin =
  | {
      name: string;
    }
  | {
      name: string;
      locallyScoped: boolean;
      guilds: string[];
    };

export type DiscordEnvironment = Environment & {
  discord: {
    client: DiscordAPIClient;
    config: DiscordConfigFile;
  };
};

export type InteractionPlugin = {
  descriptor: RESTPostAPIChatInputApplicationCommandsJSONBody;
  onNewInteraction: (interaction: ApplicationInteractionClient, environment: DiscordEnvironment) => unknown;
} & BasePlugin;

export type AutocompletePlugin = {
  descriptor: RESTPostAPIChatInputApplicationCommandsJSONBody;
  onAutoComplete: (interaction: AutocompleteInteractionClient, environment: DiscordEnvironment) => unknown;
} & BasePlugin;

export type ContextMenuPlugin = {
  descriptor: RESTPostAPIContextMenuApplicationCommandsJSONBody;
  onNewContextAction: (interaction: ContextMenuInteractionClient, environment: DiscordEnvironment) => unknown;
} & BasePlugin;

export type ComponentPlugin = {
  publishedComponentIds: string[];
  onNewButtonClick: (interaction: ComponentInteractionClient, environment: DiscordEnvironment) => unknown;
} & BasePlugin;

export type ModalPlugin = {
  publishedModalIds: string[];
  onModalSubmit: (interaction: ModalInteractionClient, environment: DiscordEnvironment) => unknown;
} & BasePlugin;

export type UserInteractionPlugin = InteractionPlugin | ContextMenuPlugin;
export type CallbackPlugin = AutocompletePlugin;
export function isUserInteractionPlugin(plugin: Plugin): plugin is UserInteractionPlugin {
  return (<UserInteractionPlugin>plugin).descriptor !== undefined;
}

export function isCallbackPlugin(plugin: Plugin): plugin is CallbackPlugin {
  return !isUserInteractionPlugin(plugin);
}

export type Plugin = InteractionPlugin | AutocompletePlugin | ContextMenuPlugin | ComponentPlugin | ModalPlugin;

export const isInteractionPlugin = (plugin: Plugin): plugin is InteractionPlugin =>
  (<InteractionPlugin>plugin).onNewInteraction !== undefined;

export const canAutoComplete = (plugin: Plugin): plugin is AutocompletePlugin =>
  (<AutocompletePlugin>plugin).onAutoComplete !== undefined;

export const isContextMenuAction = (plugin: Plugin): plugin is ContextMenuPlugin =>
  (<ContextMenuPlugin>plugin).onNewContextAction !== undefined;

export const isComponentPlugin = (plugin: Plugin): plugin is ComponentPlugin =>
  (<ComponentPlugin>plugin).onNewButtonClick !== undefined;

export const isModalPlugin = (plugin: Plugin): plugin is ModalPlugin =>
  (<ModalPlugin>plugin).onModalSubmit !== undefined;

const logger = loggerFactory("S:Plugins");

const plugins: {
  interactions: { [command: string]: InteractionPlugin };
  autocompletes: { [command: string]: AutocompletePlugin };
  contextMenu: { [command: string]: ContextMenuPlugin };
  components: ComponentPlugin[];
  modals: ModalPlugin[];
} = {
  interactions: {},
  autocompletes: {},
  contextMenu: {},
  components: [],
  modals: [],
};

export type Rabscuttle = typeof plugins;

const registerInteractionPlugin = (plugin: InteractionPlugin) => {
  const name = plugin.descriptor.name;
  plugins.interactions[name] = plugin;
};

const registerAutoComplete = (plugin: AutocompletePlugin) => {
  const name = plugin.descriptor.name;
  plugins.autocompletes[name] = plugin;
};

const registerContextMenuPlugin = (plugin: ContextMenuPlugin) => {
  const name = plugin.descriptor.name;
  plugins.contextMenu[name] = plugin;
};

const register = (plugin: Plugin) => {
  console.log(`${plugin.name} registered`);
  if (isInteractionPlugin(plugin)) {
    registerInteractionPlugin(plugin);
  }

  if (canAutoComplete(plugin)) {
    registerAutoComplete(plugin);
  }

  if (isContextMenuAction(plugin)) {
    registerContextMenuPlugin(plugin);
  }

  if (isContextMenuAction(plugin)) {
    registerContextMenuPlugin(plugin);
  }

  if (isComponentPlugin(plugin)) {
    const idCollisions = plugin.publishedComponentIds.filter(id =>
      plugins.components.some(x => x.publishedComponentIds.includes(id)),
    );
    for (const idCollision of idCollisions) {
      const pluginCollisions = plugins.components.filter(plugin => plugin.publishedComponentIds.includes(idCollision));
      logger.warn(
        `Button ID '${idCollision}' of [${
          plugin.name
        }] collides with these plugins publishing the same custom ID [${pluginCollisions.join(", ")}]`,
      );
    }
    plugins.components.push(plugin);
  }

  if (isModalPlugin(plugin)) {
    const idCollisions = plugin.publishedModalIds.filter(id =>
      plugins.modals.some(x => x.publishedModalIds.includes(id)),
    );
    for (const idCollision of idCollisions) {
      const pluginCollision = plugins.modals.filter(plugin => plugin.publishedModalIds.includes(idCollision));
      logger.warn(
        `Modal ID '${idCollision}' of [${
          plugin.name
        }] collides with these plugins publishing the same custom id [${pluginCollision.join(", ")}]`,
      );
    }
    plugins.modals.push(plugin);
  }
};

export function buildEventBus() {
  return {
    plugins: plugins,
    onNewInteraction: onNewInteraction,
    register: register,
  };
}

const onNewInteraction = (interaction: APIUnknownInteraction, environment: DiscordEnvironment) => {
  const { promise, resolve } = Promise.withResolvers<AnyGatewayResult>();
  dispatchInteractionResponseClient(resolve, interaction, environment, plugins);
  return promise;
};

import { Client } from "@/Client";
import {
  GetDatabaseServicesInput,
  GetMaintenanceModeInput,
  GetOptionsInput,
  GetPluginsInput,
  GetProfileInput,
  GetRolesInput,
  GetThemesInput,
  GetUsersInput,
  GetWpConfigInput,
  InspectServiceInput,
  SearchPluginInput,
  SearchThemeInput
} from "./wordpress.dto";
import {
  GetDatabaseServicesResponse,
  GetMaintenanceModeResponse,
  GetOptionsResponse,
  GetPluginsResponse,
  GetProfileResponse,
  GetRolesResponse,
  GetThemesResponse,
  GetUsersResponse,
  GetWpConfigResponse,
  InspectServiceResponse,
  SearchPluginResponse,
  SearchThemeResponse
} from "./wordpress.types";

export class WordpressServiceManager {
  constructor(private client: Client) {}

  /**
   * Inspect a WordPress service
   * @param input Service input
   * @returns Service details
   */
  async inspectService(input: InspectServiceInput) {
    await this.client.validateInput(input);

    const { data } = await this.client.http.get<InspectServiceResponse>(
      "/services.wordpress.inspectService",
      {
        params: input,
      }
    );

    return data;
  }

  /**
   * Get WordPress users
   * @param input Service input
   * @returns List of users
   */
  async getUsers(input: GetUsersInput) {
    await this.client.validateInput(input);

    const { data } = await this.client.http.get<GetUsersResponse>(
      "/services.wordpress.getUsers",
      {
        params: input,
      }
    );

    return data;
  }

  /**
   * Get WordPress roles
   * @param input Service input
   * @returns Roles
   */
  async getRoles(input: GetRolesInput) {
    await this.client.validateInput(input);

    const { data } = await this.client.http.get<GetRolesResponse>(
      "/services.wordpress.getRoles",
      {
        params: input,
      }
    );

    return data;
  }

  /**
   * Get WordPress maintenance mode status
   * @param input Service input
   * @returns Maintenance mode status
   */
  async getMaintenanceMode(input: GetMaintenanceModeInput) {
    await this.client.validateInput(input);

    const { data } = await this.client.http.get<GetMaintenanceModeResponse>(
      "/services.wordpress.getMaintenanceMode",
      {
        params: input,
      }
    );

    return data;
  }

  /**
   * Get WordPress themes
   * @param input Service input
   * @returns List of themes
   */
  async getThemes(input: GetThemesInput) {
    await this.client.validateInput(input);

    const { data } = await this.client.http.get<GetThemesResponse>(
      "/services.wordpress.getThemes",
      {
        params: input,
      }
    );

    return data;
  }

  /**
   * Search WordPress themes
   * @param input Search input
   * @returns Search results
   */
  async searchTheme(input: SearchThemeInput) {
    await this.client.validateInput(input);

    const { data } = await this.client.http.get<SearchThemeResponse>(
      "/services.wordpress.searchTheme",
      {
        params: input,
      }
    );

    return data;
  }

  /**
   * Get WordPress plugins
   * @param input Service input
   * @returns List of plugins
   */
  async getPlugins(input: GetPluginsInput) {
    await this.client.validateInput(input);

    const { data } = await this.client.http.get<GetPluginsResponse>(
      "/services.wordpress.getPlugins",
      {
        params: input,
      }
    );

    return data;
  }

  /**
   * Search WordPress plugins
   * @param input Search input
   * @returns Search results
   */
  async searchPlugin(input: SearchPluginInput) {
    await this.client.validateInput(input);

    const { data } = await this.client.http.get<SearchPluginResponse>(
      "/services.wordpress.searchPlugin",
      {
        params: input,
      }
    );

    return data;
  }

  /**
   * Get WordPress options
   * @param input Service input
   * @returns List of options
   */
  async getOptions(input: GetOptionsInput) {
    await this.client.validateInput(input);

    const { data } = await this.client.http.get<GetOptionsResponse>(
      "/services.wordpress.getOptions",
      {
        params: input,
      }
    );

    return data;
  }

  /**
   * Get database services
   * @param input Project input
   * @returns List of database services
   */
  async getDatabaseServices(input: GetDatabaseServicesInput) {
    await this.client.validateInput(input);

    const { data } = await this.client.http.get<GetDatabaseServicesResponse>(
      "/services.wordpress.getDatabaseServices",
      {
        params: input,
      }
    );

    return data;
  }

  /**
   * Get WordPress configuration
   * @param input Service input
   * @returns WordPress configuration
   */
  async getWpConfig(input: GetWpConfigInput) {
    await this.client.validateInput(input);

    const { data } = await this.client.http.get<GetWpConfigResponse>(
      "/services.wordpress.getWpConfig",
      {
        params: input,
      }
    );

    return data;
  }

  /**
   * Get WordPress profile
   * @param input Profile input
   * @returns Profile data
   */
  async getProfile(input: GetProfileInput) {
    await this.client.validateInput(input);

    const { data } = await this.client.http.get<GetProfileResponse>(
      "/services.wordpress.getProfile",
      {
        params: input,
      }
    );

    return data;
  }
}

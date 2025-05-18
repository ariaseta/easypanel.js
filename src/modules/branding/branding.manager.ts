import { Client } from "@/Client";

import {
  GetErrorPageSettingsResponse,
  GetInterfaceSettingsResponse,
  SetErrorPageSettingsResponse,
  SetInterfaceSettingsResponse,
} from "./branding.types";
import {
  SetErrorPageSettingsInput,
  SetInterfaceSettingsInput,
} from "./branding.dto";

export class BrandingManager {
  constructor(private client: Client) {}

  /**
   * Get error page settings
   * @returns Error page settings
   */
  async getErrorPageSettings() {
    const { data } = await this.client.http.get<GetErrorPageSettingsResponse>(
      "/branding.getErrorPageSettings"
    );

    return data;
  }

  /**
   * Get interface settings
   * @returns Interface settings
   */
  async getInterfaceSettings() {
    const { data } = await this.client.http.get<GetInterfaceSettingsResponse>(
      "/branding.getInterfaceSettings"
    );

    return data;
  }

  /**
   * Get public interface settings
   * @returns Public interface settings
   */
  async getInterfaceSettingsPublic() {
    const { data } = await this.client.http.get<GetInterfaceSettingsResponse>(
      "/branding.getInterfaceSettingsPublic"
    );

    return data;
  }

  /**
   * Set error page settings
   * @param input Error page settings
   * @returns Response
   */
  async setErrorPageSettings(input: SetErrorPageSettingsInput) {
    await this.client.validateInput(input);

    const { data } = await this.client.http.post<SetErrorPageSettingsResponse>(
      "/branding.setErrorPageSettings",
      input
    );

    return data;
  }

  /**
   * Set interface settings
   * @param input Interface settings
   * @returns Response
   */
  async setInterfaceSettings(input: SetInterfaceSettingsInput) {
    await this.client.validateInput(input);

    const { data } = await this.client.http.post<SetInterfaceSettingsResponse>(
      "/branding.setInterfaceSettings",
      input
    );

    return data;
  }
}

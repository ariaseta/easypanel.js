import { Client } from "@/Client";
import {
  GetDailyDockerCleanupResponse,
  GetDemoModeResponse,
  GetGithubTokenResponse,
  GetGoogleAnalyticsMeasurementIdResponse,
  GetLetsEncryptEmailResponse,
  GetPanelDomainResponse,
  GetServerIpResponse
} from "./settings.types";

export class SettingsManager {
  constructor(private client: Client) {}

  /**
   * Get GitHub token
   * @returns GitHub token
   */
  async getGithubToken() {
    const { data } = await this.client.http.get<GetGithubTokenResponse>(
      "/settings.getGithubToken"
    );

    return data;
  }

  /**
   * Get daily Docker cleanup setting
   * @returns Daily Docker cleanup setting
   */
  async getDailyDockerCleanup() {
    const { data } = await this.client.http.get<GetDailyDockerCleanupResponse>(
      "/settings.getDailyDockerCleanup"
    );

    return data;
  }

  /**
   * Get Let's Encrypt email
   * @returns Let's Encrypt email
   */
  async getLetsEncryptEmail() {
    const { data } = await this.client.http.get<GetLetsEncryptEmailResponse>(
      "/settings.getLetsEncryptEmail"
    );

    return data;
  }

  /**
   * Get panel domain
   * @returns Panel domain
   */
  async getPanelDomain() {
    const { data } = await this.client.http.get<GetPanelDomainResponse>(
      "/settings.getPanelDomain"
    );

    return data;
  }

  /**
   * Get server IP
   * @returns Server IP
   */
  async getServerIp() {
    const { data } = await this.client.http.get<GetServerIpResponse>(
      "/settings.getServerIp"
    );

    return data;
  }

  /**
   * Get demo mode setting
   * @returns Demo mode setting
   */
  async getDemoMode() {
    const { data } = await this.client.http.get<GetDemoModeResponse>(
      "/settings.getDemoMode"
    );

    return data;
  }

  /**
   * Get Google Analytics Measurement ID
   * @returns Google Analytics Measurement ID
   */
  async getGoogleAnalyticsMeasurementId() {
    const { data } = await this.client.http.get<GetGoogleAnalyticsMeasurementIdResponse>(
      "/settings.getGoogleAnalyticsMeasurementId"
    );

    return data;
  }
}

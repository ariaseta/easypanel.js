import { Client } from "@/Client";
import {
  GetConfigResponse,
  GetTunnelRulesResponse,
  ListAccountsResponse,
  ListTunnelsResponse,
  ListZonesResponse
} from "./cloudflareTunnel.types";

export class CloudflareTunnelManager {
  constructor(private client: Client) {}

  /**
   * Get Cloudflare Tunnel configuration
   * @returns Cloudflare Tunnel configuration
   */
  async getConfig() {
    const { data } = await this.client.http.get<GetConfigResponse>(
      "/cloudflareTunnel.getConfig"
    );

    return data;
  }

  /**
   * List Cloudflare accounts
   * @returns List of Cloudflare accounts
   */
  async listAccounts() {
    const { data } = await this.client.http.get<ListAccountsResponse>(
      "/cloudflareTunnel.listAccounts"
    );

    return data;
  }

  /**
   * List Cloudflare tunnels
   * @returns List of Cloudflare tunnels
   */
  async listTunnels() {
    const { data } = await this.client.http.get<ListTunnelsResponse>(
      "/cloudflareTunnel.listTunnels"
    );

    return data;
  }

  /**
   * List Cloudflare zones
   * @returns List of Cloudflare zones
   */
  async listZones() {
    const { data } = await this.client.http.get<ListZonesResponse>(
      "/cloudflareTunnel.listZones"
    );

    return data;
  }

  /**
   * Get Cloudflare Tunnel rules
   * @returns Cloudflare Tunnel rules
   */
  async getTunnelRules() {
    const { data } = await this.client.http.get<GetTunnelRulesResponse>(
      "/cloudflareTunnel.getTunnelRules"
    );

    return data;
  }
}

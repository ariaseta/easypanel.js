import { Client } from "@/Client";
import { GetCustomConfigResponse, GetDashboardResponse, GetEnvResponse } from "./traefik.types";

export class TraefikManager {
  constructor(private client: Client) {}

  /**
   * Get Traefik environment variables
   * @returns Traefik environment variables
   */
  async getEnv() {
    const { data } = await this.client.http.get<GetEnvResponse>(
      "/traefik.getEnv"
    );

    return data;
  }

  /**
   * Get Traefik custom configuration
   * @returns Traefik custom configuration
   */
  async getCustomConfig() {
    const { data } = await this.client.http.get<GetCustomConfigResponse>(
      "/traefik.getCustomConfig"
    );

    return data;
  }

  /**
   * Get Traefik dashboard URL
   * @returns Traefik dashboard URL
   */
  async getDashboard() {
    const { data } = await this.client.http.get<GetDashboardResponse>(
      "/traefik.getDashboard"
    );

    return data;
  }
}

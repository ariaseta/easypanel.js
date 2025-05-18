import { Client } from "@/Client";

import {
  GetAdvancedStatResponse,
  GetDockerTaskStatResponse,
  GetMonitorTableDatResponse,
  GetServiceStatResponse,
  GetSystemStatResponse,
} from "./monitor.types";
import { GetServiceStatsInput } from "./monitor.dto";

export class MonitorManager {
  constructor(private client: Client) {}

  /**
   * Get system statistics
   * @returns System statistics
   */
  async getSystemStats() {
    const { data } = await this.client.http.get<GetSystemStatResponse>(
      "/monitor.getSystemStats"
    );

    return data;
  }

  /**
   * Get advanced statistics
   * @returns Advanced statistics
   */
  async getAdvancedStats() {
    const { data } = await this.client.http.get<GetAdvancedStatResponse>(
      "/monitor.getAdvancedStats"
    );

    return data;
  }

  /**
   * Get service statistics
   * @param input Service input
   * @returns Service statistics
   */
  async getServiceStats(input: GetServiceStatsInput) {
    await this.client.validateInput(input);

    const { data } = await this.client.http.get<GetServiceStatResponse>(
      "/monitor.getServiceStats",
      {
        params: input,
      }
    );

    return data;
  }

  /**
   * Get Docker task statistics
   * @returns Docker task statistics
   */
  async getDockerTaskStats() {
    const { data } = await this.client.http.get<GetDockerTaskStatResponse>(
      "/monitor.getDockerTaskStats"
    );

    return data;
  }

  /**
   * Get monitor table data
   * @returns Monitor table data
   */
  async getMonitorTableData() {
    const { data } = await this.client.http.get<GetMonitorTableDatResponse>(
      "/monitor.getMonitorTableData"
    );

    return data;
  }
}

import { Client } from "@/Client";
import { ListPortsResponse } from "./ports.types";

export class PortsManager {
  constructor(private client: Client) {}

  /**
   * List ports
   * @returns List of ports
   */
  async list() {
    const { data } = await this.client.http.get<ListPortsResponse>(
      "/ports.listPorts"
    );

    return data;
  }
}

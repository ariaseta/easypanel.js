import { Client } from "@/Client";
import { AddWorkerCommandResponse, ListNodesResponse } from "./cluster.types";

export class ClusterManager {
  constructor(private client: Client) {}

  /**
   * List cluster nodes
   * @returns List of cluster nodes
   */
  async listNodes() {
    const { data } = await this.client.http.get<ListNodesResponse>(
      "/cluster.listNodes"
    );

    return data;
  }

  /**
   * Get command to add a worker node
   * @returns Command to add a worker node
   */
  async addWorkerCommand() {
    const { data } = await this.client.http.get<AddWorkerCommandResponse>(
      "/cluster.addWorkerCommand"
    );

    return data;
  }
}

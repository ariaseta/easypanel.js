import { Client } from "@/Client";
import { ListDockerBuildersResponse } from "./dockerBuilders.types";

export class DockerBuildersManager {
  constructor(private client: Client) {}

  /**
   * List Docker builders
   * @returns List of Docker builders
   */
  async list() {
    const { data } = await this.client.http.get<ListDockerBuildersResponse>(
      "/dockerBuilders.listDockerBuilders"
    );

    return data;
  }
}

import { Client } from "@/Client";
import { ListMountsResponse } from "./mounts.types";

export class MountsManager {
  constructor(private client: Client) {}

  /**
   * List mounts
   * @returns List of mounts
   */
  async list() {
    const { data } = await this.client.http.get<ListMountsResponse>(
      "/mounts.listMounts"
    );

    return data;
  }
}

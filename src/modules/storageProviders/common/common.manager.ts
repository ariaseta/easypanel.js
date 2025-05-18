import { Client } from "@/Client";
import { ListOptionsResponse, ListResponse } from "./common.types";

export class CommonStorageProviderManager {
  constructor(private client: Client) {}

  /**
   * List storage providers
   * @returns List of storage providers
   */
  async list() {
    const { data } = await this.client.http.get<ListResponse>(
      "/storageProviders.common.list"
    );

    return data;
  }

  /**
   * List storage provider options
   * @returns List of storage provider options
   */
  async listOptions() {
    const { data } = await this.client.http.get<ListOptionsResponse>(
      "/storageProviders.common.listOptions"
    );

    return data;
  }
}

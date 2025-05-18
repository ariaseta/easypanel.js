import { Client } from "@/Client";
import { CommonStorageProviderManager } from "./common/common.manager";

export class StorageProvidersManager {
  common: CommonStorageProviderManager;

  constructor(private client: Client) {
    this.common = new CommonStorageProviderManager(client);
  }
}

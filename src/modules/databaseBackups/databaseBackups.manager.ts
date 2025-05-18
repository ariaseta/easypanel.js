import { Client } from "@/Client";
import { GetServiceDatabasesInput } from "./databaseBackups.dto";
import { GetServiceDatabasesResponse, ListDatabaseBackupsResponse } from "./databaseBackups.types";

export class DatabaseBackupsManager {
  constructor(private client: Client) {}

  /**
   * List database backups
   * @returns List of database backups
   */
  async list() {
    const { data } = await this.client.http.get<ListDatabaseBackupsResponse>(
      "/databaseBackups.listDatabaseBackups"
    );

    return data;
  }

  /**
   * Get service databases
   * @param input Service input
   * @returns List of service databases
   */
  async getServiceDatabases(input: GetServiceDatabasesInput) {
    await this.client.validateInput(input);

    const { data } = await this.client.http.get<GetServiceDatabasesResponse>(
      "/databaseBackups.getServiceDatabases",
      {
        params: input,
      }
    );

    return data;
  }
}

import { Client } from "@/Client";
import { InspectServiceInput } from "./postgres.dto";
import { InspectServiceResponse } from "./postgres.types";

export class PostgresServiceManager {
  constructor(private client: Client) {}

  /**
   * Inspect a PostgreSQL service
   * @param input Service input
   * @returns Service details
   */
  async inspectService(input: InspectServiceInput) {
    await this.client.validateInput(input);

    const { data } = await this.client.http.get<InspectServiceResponse>(
      "/services.postgres.inspectService",
      {
        params: input,
      }
    );

    return data;
  }
}

import { Client } from "@/Client";
import { InspectServiceInput } from "./mariadb.dto";
import { InspectServiceResponse } from "./mariadb.types";

export class MariadbServiceManager {
  constructor(private client: Client) {}

  /**
   * Inspect a MariaDB service
   * @param input Service input
   * @returns Service details
   */
  async inspectService(input: InspectServiceInput) {
    await this.client.validateInput(input);

    const { data } = await this.client.http.get<InspectServiceResponse>(
      "/services.mariadb.inspectService",
      {
        params: input,
      }
    );

    return data;
  }
}

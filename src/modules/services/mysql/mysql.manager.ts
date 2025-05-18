import { Client } from "@/Client";
import { InspectServiceInput } from "./mysql.dto";
import { InspectServiceResponse } from "./mysql.types";

export class MysqlServiceManager {
  constructor(private client: Client) {}

  /**
   * Inspect a MySQL service
   * @param input Service input
   * @returns Service details
   */
  async inspectService(input: InspectServiceInput) {
    await this.client.validateInput(input);

    const { data } = await this.client.http.get<InspectServiceResponse>(
      "/services.mysql.inspectService",
      {
        params: input,
      }
    );

    return data;
  }
}

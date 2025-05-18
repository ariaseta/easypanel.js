import { Client } from "@/Client";
import { InspectServiceInput } from "./mongo.dto";
import { InspectServiceResponse } from "./mongo.types";

export class MongoServiceManager {
  constructor(private client: Client) {}

  /**
   * Inspect a MongoDB service
   * @param input Service input
   * @returns Service details
   */
  async inspectService(input: InspectServiceInput) {
    await this.client.validateInput(input);

    const { data } = await this.client.http.get<InspectServiceResponse>(
      "/services.mongo.inspectService",
      {
        params: input,
      }
    );

    return data;
  }
}

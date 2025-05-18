import { Client } from "@/Client";
import { InspectServiceInput } from "./redis.dto";
import { InspectServiceResponse } from "./redis.types";

export class RedisServiceManager {
  constructor(private client: Client) {}

  /**
   * Inspect a Redis service
   * @param input Service input
   * @returns Service details
   */
  async inspectService(input: InspectServiceInput) {
    await this.client.validateInput(input);

    const { data } = await this.client.http.get<InspectServiceResponse>(
      "/services.redis.inspectService",
      {
        params: input,
      }
    );

    return data;
  }
}

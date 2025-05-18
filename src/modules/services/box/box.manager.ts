import { Client } from "@/Client";
import { InspectServiceInput } from "./box.dto";
import { InspectServiceResponse, ListPresetsResponse } from "./box.types";

export class BoxServiceManager {
  constructor(private client: Client) {}

  /**
   * Inspect a box service
   * @param input Service input
   * @returns Service details
   */
  async inspectService(input: InspectServiceInput) {
    await this.client.validateInput(input);

    const { data } = await this.client.http.get<InspectServiceResponse>(
      "/services.box.inspectService",
      {
        params: input,
      }
    );

    return data;
  }

  /**
   * List box presets
   * @returns List of presets
   */
  async listPresets() {
    const { data } = await this.client.http.get<ListPresetsResponse>(
      "/services.box.listPresets"
    );

    return data;
  }
}

import { Client } from "@/Client";
import { GetDockerServicesInput, GetIssuesInput, InspectServiceInput } from "./compose.dto";
import { GetDockerServicesResponse, GetIssuesResponse, InspectServiceResponse } from "./compose.types";

export class ComposeServiceManager {
  constructor(private client: Client) {}

  /**
   * Inspect a Compose service
   * @param input Service input
   * @returns Service details
   */
  async inspectService(input: InspectServiceInput) {
    await this.client.validateInput(input);

    const { data } = await this.client.http.get<InspectServiceResponse>(
      "/services.compose.inspectService",
      {
        params: input,
      }
    );

    return data;
  }

  /**
   * Get Docker services for a Compose service
   * @param input Service input
   * @returns Docker services
   */
  async getDockerServices(input: GetDockerServicesInput) {
    await this.client.validateInput(input);

    const { data } = await this.client.http.get<GetDockerServicesResponse>(
      "/services.compose.getDockerServices",
      {
        params: input,
      }
    );

    return data;
  }

  /**
   * Get issues for a Compose service
   * @param input Service input
   * @returns Compose issues
   */
  async getIssues(input: GetIssuesInput) {
    await this.client.validateInput(input);

    const { data } = await this.client.http.get<GetIssuesResponse>(
      "/services.compose.getIssues",
      {
        params: input,
      }
    );

    return data;
  }
}

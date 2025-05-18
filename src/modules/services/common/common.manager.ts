import { Client } from "@/Client";
import { GetNotesInput, GetServiceErrorInput, RenameServiceInput, SetNotesInput } from "./common.dto";
import { GetNotesResponse, GetServiceErrorResponse, RenameServiceResponse, SetNotesResponse } from "./common.types";

export class CommonServiceManager {
  constructor(private client: Client) {}

  /**
   * Get service error
   * @param input Service error input
   * @returns Service error
   */
  async getServiceError(input: GetServiceErrorInput) {
    await this.client.validateInput(input);

    const { data } = await this.client.http.get<GetServiceErrorResponse>(
      "/services.common.getServiceError",
      {
        params: input,
      }
    );

    return data;
  }

  /**
   * Get service notes
   * @param input Service notes input
   * @returns Service notes
   */
  async getNotes(input: GetNotesInput) {
    await this.client.validateInput(input);

    const { data } = await this.client.http.get<GetNotesResponse>(
      "/services.common.getNotes",
      {
        params: input,
      }
    );

    return data;
  }

  /**
   * Rename a service
   * @param input Rename service input
   * @returns Rename service response
   */
  async rename(input: RenameServiceInput) {
    await this.client.validateInput(input);

    const { data } = await this.client.http.post<RenameServiceResponse>(
      "/services.common.rename",
      input
    );

    return data;
  }

  /**
   * Set service notes
   * @param input Set notes input
   * @returns Set notes response
   */
  async setNotes(input: SetNotesInput) {
    await this.client.validateInput(input);

    const { data } = await this.client.http.post<SetNotesResponse>(
      "/services.common.setNotes",
      input
    );

    return data;
  }
}

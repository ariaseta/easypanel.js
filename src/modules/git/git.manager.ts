import { Client } from "@/Client";

import { GenerateKeyInput, GetPublicKeyInput } from "./git.dto";
import { GetPublicKeyResponse, GenerateKeyresponse } from "./git.types";

export class GitManager {
  constructor(private client: Client) {}

  /**
   * Get Git public key for a service
   * @param input Service input
   * @returns Public key
   */
  async getPublicKey(input: GetPublicKeyInput) {
    await this.client.validateInput(input);

    const { data } = await this.client.http.get<GetPublicKeyResponse>(
      "/git.getPublicKey",
      {
        params: input,
      }
    );

    return data;
  }

  /**
   * Generate Git key for a service
   * @param input Service input
   * @returns Generated key response
   */
  async generateKey(input: GenerateKeyInput) {
    await this.client.validateInput(input);

    const { data } = await this.client.http.post<GenerateKeyresponse>(
      "/git.generateKey",
      input
    );

    return data;
  }
}

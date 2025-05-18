import { Client } from "@/Client";
import { ListMiddlewaresResponse } from "./middlewares.types";

export class MiddlewaresManager {
  constructor(private client: Client) {}

  /**
   * List middlewares
   * @returns List of middlewares
   */
  async list() {
    const { data } = await this.client.http.get<ListMiddlewaresResponse>(
      "/middlewares.listMiddlewares"
    );

    return data;
  }
}

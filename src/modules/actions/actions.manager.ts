import { Client } from "@/Client";

import {
  GetActionInput,
  KillActionInput,
  ListActionsInput,
} from "./actions.dto";
import {
  GetActionResponse,
  KillActionResponse,
  ListActionsResponse,
} from "./actions.types";

export class ActionsManager {
  constructor(private client: Client) {}

  /**
   * List actions for a service
   * @param input Service input
   * @returns List of actions
   */
  async list(input: ListActionsInput) {
    await this.client.validateInput(input);

    const { data } = await this.client.http.get<ListActionsResponse>(
      "/actions.listActions",
      {
        params: input,
      }
    );

    return data;
  }

  /**
   * Get action details
   * @param input Action input
   * @returns Action details
   */
  async get(input: GetActionInput) {
    await this.client.validateInput(input);

    const { data } = await this.client.http.get<GetActionResponse>(
      "/actions.getAction",
      {
        params: input,
      }
    );

    return data;
  }

  /**
   * Kill an action
   * @param input Action input
   * @returns Kill action response
   */
  async kill(input: KillActionInput) {
    await this.client.validateInput(input);

    const { data } = await this.client.http.post<KillActionResponse>(
      "/actions.killAction",
      input
    );

    return data;
  }
}

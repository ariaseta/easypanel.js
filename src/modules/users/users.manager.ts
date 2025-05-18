import { Client } from "@/Client";
import { ListUsersResponse } from "./users.types";

export class UsersManager {
  constructor(private client: Client) {}

  /**
   * List all users
   * @returns List of users
   */
  async list() {
    const { data } = await this.client.http.get<ListUsersResponse>(
      "/users.listUsers"
    );

    return data;
  }
}

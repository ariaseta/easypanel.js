import { Client } from "@/Client";
import { ListNotificationChannelsResponse } from "./notifications.types";

export class NotificationsManager {
  constructor(private client: Client) {}

  /**
   * List notification channels
   * @returns List of notification channels
   */
  async listNotificationChannels() {
    const { data } = await this.client.http.get<ListNotificationChannelsResponse>(
      "/notifications.listNotificationChannels"
    );

    return data;
  }
}

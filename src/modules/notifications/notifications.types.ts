export interface NotificationChannel {
  id: string;
  name: string;
  type: string;
  config: {
    url?: string;
    token?: string;
    channel?: string;
    webhookUrl?: string;
    roomId?: string;
    botToken?: string;
    chatId?: string;
  };
  createdAt: string;
  updatedAt: string;
}

export type ListNotificationChannelsResponse = NotificationChannel[];

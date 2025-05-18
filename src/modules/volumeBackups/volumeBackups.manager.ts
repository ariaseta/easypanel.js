import { Client } from "@/Client";
import { ListVolumeBackupsResponse, ListVolumeMountsResponse } from "./volumeBackups.types";

export class VolumeBackupsManager {
  constructor(private client: Client) {}

  /**
   * List volume mounts
   * @returns List of volume mounts
   */
  async listVolumeMounts() {
    const { data } = await this.client.http.get<ListVolumeMountsResponse>(
      "/volumeBackups.listVolumeMounts"
    );

    return data;
  }

  /**
   * List volume backups
   * @returns List of volume backups
   */
  async listVolumeBackups() {
    const { data } = await this.client.http.get<ListVolumeBackupsResponse>(
      "/volumeBackups.listVolumeBackups"
    );

    return data;
  }
}

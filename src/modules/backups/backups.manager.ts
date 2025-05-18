import { Client } from "@/Client";

import {
  ClearBackupLogResponse,
  CreateBackupDestinationResponse,
  DestroyBackupDestinationResponse,
  GetBackupLogResponse,
  ListBackupDestinationsResponse,
  ListDestinationOptionsResponse,
  RestoreBackupResponse,
  UpdateBackupDestinationResponse,
} from "./backups.types";
import {
  ClearBackupLogInput,
  CreateBackupDestinationInput,
  DestroyBackupDestinationInput,
  GetBackupLogInput,
  RestoreBackupInput,
  UpdateBackupDestinationInput,
} from "./backups.dto";

export class BackupsManager {
  constructor(private client: Client) {}

  /**
   * List backup destinations
   * @returns List of backup destinations
   */
  async listDestinations() {
    const { data } = await this.client.http.get<ListBackupDestinationsResponse>(
      "/backups.listBackupDestinations"
    );

    return data;
  }

  /**
   * List backup destination options
   * @returns List of backup destination options
   */
  async listDestinationOptions() {
    const { data } = await this.client.http.get<ListDestinationOptionsResponse>(
      "/backups.listBackupDestinationOptions"
    );

    return data;
  }

  /**
   * Get backup log for a service
   * @param input Service input
   * @returns Backup log
   */
  async getLog(input: GetBackupLogInput) {
    await this.client.validateInput(input);

    const { data } = await this.client.http.get<GetBackupLogResponse>(
      "/backups.getBackupLog",
      {
        params: input,
      }
    );

    return data;
  }

  /**
   * Clear backup log for a service
   * @param input Service input
   * @returns Clear backup log response
   */
  async clearLog(input: ClearBackupLogInput) {
    await this.client.validateInput(input);

    const { data } = await this.client.http.post<ClearBackupLogResponse>(
      "/backups.clearBackupLog",
      input
    );

    return data;
  }

  /**
   * Create a backup destination
   * @param input Backup destination input
   * @returns Created backup destination
   */
  async createDestination(input: CreateBackupDestinationInput) {
    await this.client.validateInput(input);

    const { data } =
      await this.client.http.post<CreateBackupDestinationResponse>(
        "/backups.createBackupDestination",
        input
      );

    return data;
  }

  /**
   * Update a backup destination
   * @param input Backup destination input
   * @returns Update backup destination response
   */
  async updateDestination(input: UpdateBackupDestinationInput) {
    await this.client.validateInput(input);

    const { data } =
      await this.client.http.post<UpdateBackupDestinationResponse>(
        "/backups.updateBackupDestination",
        input
      );

    return data;
  }

  /**
   * Destroy a backup destination
   * @param input Backup destination ID
   * @returns Destroy backup destination response
   */
  async destroyDestination(input: DestroyBackupDestinationInput) {
    await this.client.validateInput(input);

    const { data } =
      await this.client.http.post<DestroyBackupDestinationResponse>(
        "/backups.destroyBackupDestination",
        input
      );

    return data;
  }

  /**
   * Restore a backup
   * @param input Restore backup input
   * @returns Restore backup response
   */
  async restore(input: RestoreBackupInput) {
    await this.client.validateInput(input);

    const { data } = await this.client.http.post<RestoreBackupResponse>(
      "/backups.restoreBackup",
      input
    );

    return data;
  }
}

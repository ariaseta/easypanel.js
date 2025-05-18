export interface DatabaseBackup {
  id: string;
  projectName: string;
  serviceName: string;
  databaseName: string;
  destinationId: string;
  path: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}

export type ListDatabaseBackupsResponse = DatabaseBackup[];

export interface ServiceDatabase {
  name: string;
}

export type GetServiceDatabasesResponse = ServiceDatabase[];

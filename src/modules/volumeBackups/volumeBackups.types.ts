export interface VolumeMount {
  id: string;
  projectName: string;
  serviceName: string;
  mountPath: string;
  createdAt: string;
  updatedAt: string;
}

export type ListVolumeMountsResponse = VolumeMount[];

export interface VolumeBackup {
  id: string;
  volumeMountId: string;
  destinationId: string;
  path: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}

export type ListVolumeBackupsResponse = VolumeBackup[];

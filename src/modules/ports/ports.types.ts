export interface Port {
  id: string;
  port: number;
  projectName: string;
  serviceName: string;
  createdAt: string;
  updatedAt: string;
}

export type ListPortsResponse = Port[];

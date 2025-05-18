export interface ClusterNode {
  id: string;
  hostname: string;
  role: string;
  status: string;
  createdAt: string;
  updatedAt: string;
}

export type ListNodesResponse = ClusterNode[];

export interface AddWorkerCommandResponse {
  command: string;
}

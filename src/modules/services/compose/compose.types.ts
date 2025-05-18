export interface Service {
  id: string;
  name: string;
  type: string;
  projectName: string;
  createdAt: string;
  updatedAt: string;
  status: string;
}

export interface InspectServiceResponse {
  service: Service;
  config: {
    composeFile: string;
    resources?: {
      memoryReservation: number;
      memoryLimit: number;
      cpuReservation: number;
      cpuLimit: number;
    };
  };
}

export interface DockerService {
  id: string;
  name: string;
  image: string;
  status: string;
  ports: string[];
}

export type GetDockerServicesResponse = DockerService[];

export interface ComposeIssue {
  type: string;
  message: string;
  line?: number;
  column?: number;
}

export type GetIssuesResponse = ComposeIssue[];

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
    version: string;
    password: string;
    resources?: {
      memoryReservation: number;
      memoryLimit: number;
      cpuReservation: number;
      cpuLimit: number;
    };
  };
}

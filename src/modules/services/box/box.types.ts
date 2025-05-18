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
    image: string;
    env?: string;
    ports?: Array<{
      published: number;
      target: number;
      protocol?: string;
    }>;
    resources?: {
      memoryReservation: number;
      memoryLimit: number;
      cpuReservation: number;
      cpuLimit: number;
    };
    volumes?: Array<{
      type: string;
      hostPath?: string;
      mountPath?: string;
      name?: string;
    }>;
    preset?: string;
  };
}

export interface Preset {
  id: string;
  name: string;
  description: string;
  image: string;
  ports: Array<{
    published: number;
    target: number;
    protocol?: string;
  }>;
  volumes: Array<{
    type: string;
    hostPath?: string;
    mountPath?: string;
    name?: string;
  }>;
  env?: string;
}

export type ListPresetsResponse = Preset[];

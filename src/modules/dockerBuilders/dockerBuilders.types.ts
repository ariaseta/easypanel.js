export interface DockerBuilder {
  id: string;
  name: string;
  type: string;
  config: {
    host?: string;
    port?: number;
    username?: string;
    password?: string;
    tlsCa?: string;
    tlsCert?: string;
    tlsKey?: string;
  };
  createdAt: string;
  updatedAt: string;
}

export type ListDockerBuildersResponse = DockerBuilder[];

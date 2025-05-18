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
    source?: {
      type: string;
      image?: string;
      username?: string;
      password?: string;
      owner?: string;
      repo?: string;
      ref?: string;
      path?: string;
      autoDeploy?: boolean;
    };
    build?: {
      type: string;
      file?: string;
      buildpacksBuilder?: string;
      nixpacksVersion?: string;
      installCommand?: string;
      buildCommand?: string;
      startCommand?: string;
      nixPackages?: string;
      aptPackages?: string;
    };
    env?: string;
    basicAuth?: Array<{
      username: string;
      password: string;
    }>;
    deploy?: {
      replicas?: number;
      command?: string | null;
      zeroDowntime?: boolean;
      capAdd?: string[];
      capDrop?: string[];
      sysctls?: Record<string, string>;
      groups?: string[];
      tiniInit?: boolean;
    };
    domains?: Array<{
      host: string;
      https?: boolean;
      port?: number;
      path?: string;
      middlewares?: string[];
      certificateResolver?: string;
      wildcard?: boolean;
      internalProtocol?: string;
      service?: string;
    }>;
    mounts?: Array<{
      type: string;
      hostPath?: string;
      mountPath?: string;
      name?: string;
      content?: string;
    }>;
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
    maintenance?: {
      enabled: boolean;
      title?: string;
      subtitle?: string;
      customLogo?: string;
      customCss?: string;
      hideLogo?: boolean;
      hideLinks?: boolean;
    };
  };
}

export interface GetExposedPortsResponse {
  ports: number[];
}

export interface CreateServiceResponse {
  service: Service;
}

export interface UpdateDeployResponse {
  success: boolean;
}

export interface UpdateResourcesResponse {
  success: boolean;
}

export interface UpdateEnvResponse {
  success: boolean;
}

export interface UpdatePortsResponse {
  success: boolean;
}

export interface UpdateBasicAuthResponse {
  success: boolean;
}

export interface UpdateProxyResponse {
  success: boolean;
}

export interface UpdateRedirectsResponse {
  success: boolean;
}

export interface UpdateSourceGithubResponse {
  success: boolean;
}

export interface UpdateSourceGitResponse {
  success: boolean;
}

export interface EnableGithubDeployResponse {
  success: boolean;
}

export interface DisableGithubDeployResponse {
  success: boolean;
}

export interface UpdateBuildResponse {
  success: boolean;
}

import { IsArray, IsBoolean, IsNumber, IsObject, IsOptional, IsString } from "class-validator";

export class InspectServiceInput {
  @IsString()
  projectName: string;

  @IsString()
  serviceName: string;
}

export class GetExposedPortsInput {
  @IsString()
  projectName: string;

  @IsString()
  serviceName: string;
}

export class CreateServiceInput {
  @IsString()
  projectName: string;

  @IsString()
  serviceName: string;

  @IsObject()
  @IsOptional()
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

  @IsObject()
  @IsOptional()
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

  @IsString()
  @IsOptional()
  env?: string;

  @IsArray()
  @IsOptional()
  basicAuth?: Array<{
    username: string;
    password: string;
  }>;

  @IsObject()
  @IsOptional()
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

  @IsArray()
  @IsOptional()
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

  @IsArray()
  @IsOptional()
  mounts?: Array<{
    type: string;
    hostPath?: string;
    mountPath?: string;
    name?: string;
    content?: string;
  }>;

  @IsArray()
  @IsOptional()
  ports?: Array<{
    published: number;
    target: number;
    protocol?: string;
  }>;

  @IsObject()
  @IsOptional()
  resources?: {
    memoryReservation: number;
    memoryLimit: number;
    cpuReservation: number;
    cpuLimit: number;
  };

  @IsObject()
  @IsOptional()
  maintenance?: {
    enabled: boolean;
    title?: string;
    subtitle?: string;
    customLogo?: string;
    customCss?: string;
    hideLogo?: boolean;
    hideLinks?: boolean;
  };
}

export class UpdateDeployInput {
  @IsString()
  projectName: string;

  @IsString()
  serviceName: string;

  @IsObject()
  @IsOptional()
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
}

export class UpdateResourcesInput {
  @IsString()
  projectName: string;

  @IsString()
  serviceName: string;

  @IsObject()
  resources: {
    memoryReservation: number;
    memoryLimit: number;
    cpuReservation: number;
    cpuLimit: number;
  };
}

export class UpdateEnvInput {
  @IsString()
  projectName: string;

  @IsString()
  serviceName: string;

  @IsString()
  @IsOptional()
  env?: string;

  @IsBoolean()
  @IsOptional()
  createDotEnv?: boolean;
}

export class UpdatePortsInput {
  @IsString()
  projectName: string;

  @IsString()
  serviceName: string;

  @IsArray()
  @IsOptional()
  ports?: Array<{
    published: number;
    target: number;
    protocol?: string;
  }>;
}

export class UpdateBasicAuthInput {
  @IsString()
  projectName: string;

  @IsString()
  serviceName: string;

  @IsArray()
  basicAuth: Array<{
    username: string;
    password: string;
  }>;
}

export class UpdateProxyInput {
  @IsString()
  projectName: string;

  @IsString()
  serviceName: string;

  @IsObject()
  proxy: {
    port: number;
    secure: boolean;
  };
}

export class UpdateRedirectsInput {
  @IsString()
  projectName: string;

  @IsString()
  serviceName: string;

  @IsArray()
  @IsOptional()
  redirects?: Array<{
    regex: string;
    replacement: string;
    permanent: boolean;
    enabled: boolean;
  }>;
}

export class UpdateSourceGithubInput {
  @IsString()
  projectName: string;

  @IsString()
  serviceName: string;

  @IsString()
  owner: string;

  @IsString()
  repo: string;

  @IsString()
  ref: string;

  @IsString()
  path: string;
}

export class UpdateSourceGitInput {
  @IsString()
  projectName: string;

  @IsString()
  serviceName: string;

  @IsString()
  repo: string;

  @IsString()
  ref: string;

  @IsString()
  path: string;
}

export class EnableGithubDeployInput {
  @IsString()
  projectName: string;

  @IsString()
  serviceName: string;
}

export class DisableGithubDeployInput {
  @IsString()
  projectName: string;

  @IsString()
  serviceName: string;
}

export class UpdateBuildInput {
  @IsString()
  projectName: string;

  @IsString()
  serviceName: string;

  @IsObject()
  build: {
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
}

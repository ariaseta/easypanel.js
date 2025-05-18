import { IsBoolean, IsString } from "class-validator";

export class CreateProjectInput {
  @IsString()
  name: string;
}

export class InspectProjectInput {
  @IsString()
  projectName: string;
}

export class DestroyProjectInput {
  @IsString()
  name: string;
}

export class GetDockerContainersInput {
  @IsString()
  service: string;
}

export class GetDockerServicesInput {
  @IsString()
  projectName: string;
}

export class UpdateProjectEnvInput {
  @IsString()
  projectName: string;

  @IsString()
  env: string;
}

export class UpdateAccessInput {
  @IsString()
  projectName: string;

  @IsString()
  userId: string;

  @IsBoolean()
  active: boolean;
}

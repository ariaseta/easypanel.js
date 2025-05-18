import { IsString } from "class-validator";

export class InspectServiceInput {
  @IsString()
  projectName: string;

  @IsString()
  serviceName: string;
}

export class GetDockerServicesInput {
  @IsString()
  projectName: string;

  @IsString()
  serviceName: string;
}

export class GetIssuesInput {
  @IsString()
  projectName: string;

  @IsString()
  serviceName: string;
}

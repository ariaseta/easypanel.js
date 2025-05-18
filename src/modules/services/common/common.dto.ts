import { IsOptional, IsString } from "class-validator";

export class GetServiceErrorInput {
  @IsString()
  projectName: string;

  @IsString()
  serviceName: string;
}

export class GetNotesInput {
  @IsString()
  projectName: string;

  @IsString()
  serviceName: string;
}

export class RenameServiceInput {
  @IsString()
  oldProjectName: string;

  @IsString()
  oldServiceName: string;

  @IsString()
  newProjectName: string;

  @IsString()
  newServiceName: string;
}

export class SetNotesInput {
  @IsString()
  projectName: string;

  @IsString()
  serviceName: string;

  @IsString()
  @IsOptional()
  notes?: string;
}

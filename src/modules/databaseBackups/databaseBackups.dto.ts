import { IsString } from "class-validator";

// No input parameters needed for this endpoint
export class ListDatabaseBackupsInput {}

export class GetServiceDatabasesInput {
  @IsString()
  projectName: string;

  @IsString()
  serviceName: string;
}

import { IsString } from "class-validator";

export class InspectServiceInput {
  @IsString()
  projectName: string;

  @IsString()
  serviceName: string;
}

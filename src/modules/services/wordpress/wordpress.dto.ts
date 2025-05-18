import { IsEnum, IsString } from "class-validator";

export class InspectServiceInput {
  @IsString()
  projectName: string;

  @IsString()
  serviceName: string;
}

export class GetUsersInput {
  @IsString()
  projectName: string;

  @IsString()
  serviceName: string;
}

export class GetRolesInput {
  @IsString()
  projectName: string;

  @IsString()
  serviceName: string;
}

export class GetMaintenanceModeInput {
  @IsString()
  projectName: string;

  @IsString()
  serviceName: string;
}

export class GetThemesInput {
  @IsString()
  projectName: string;

  @IsString()
  serviceName: string;
}

export class SearchThemeInput {
  @IsString()
  projectName: string;

  @IsString()
  serviceName: string;

  @IsString()
  search: string;
}

export class GetPluginsInput {
  @IsString()
  projectName: string;

  @IsString()
  serviceName: string;
}

export class SearchPluginInput {
  @IsString()
  projectName: string;

  @IsString()
  serviceName: string;

  @IsString()
  search: string;
}

export class GetOptionsInput {
  @IsString()
  projectName: string;

  @IsString()
  serviceName: string;
}

export class GetDatabaseServicesInput {
  @IsString()
  projectName: string;
}

export class GetWpConfigInput {
  @IsString()
  projectName: string;

  @IsString()
  serviceName: string;
}

export class GetProfileInput {
  @IsString()
  projectName: string;

  @IsString()
  serviceName: string;

  @IsEnum(['bootstrap', 'main_query', 'template'])
  stage: 'bootstrap' | 'main_query' | 'template';
}

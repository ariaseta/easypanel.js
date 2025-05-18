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
    version: string;
    databaseService: string;
    adminEmail: string;
    adminPassword: string;
    adminUsername: string;
    title: string;
    resources?: {
      memoryReservation: number;
      memoryLimit: number;
      cpuReservation: number;
      cpuLimit: number;
    };
  };
}

export interface WordPressUser {
  id: number;
  username: string;
  name: string;
  email: string;
  roles: string[];
  registered: string;
}

export type GetUsersResponse = WordPressUser[];

export interface WordPressRole {
  name: string;
  capabilities: string[];
}

export type GetRolesResponse = Record<string, WordPressRole>;

export interface GetMaintenanceModeResponse {
  enabled: boolean;
}

export interface WordPressTheme {
  name: string;
  version: string;
  status: string;
  description: string;
  author: string;
}

export type GetThemesResponse = WordPressTheme[];

export interface SearchThemeResponse {
  themes: {
    name: string;
    version: string;
    description: string;
    author: string;
    preview_url: string;
    screenshot: string;
  }[];
}

export interface WordPressPlugin {
  name: string;
  version: string;
  status: string;
  description: string;
  author: string;
}

export type GetPluginsResponse = WordPressPlugin[];

export interface SearchPluginResponse {
  plugins: {
    name: string;
    version: string;
    description: string;
    author: string;
    slug: string;
  }[];
}

export interface WordPressOption {
  name: string;
  value: string;
}

export type GetOptionsResponse = WordPressOption[];

export interface DatabaseService {
  id: string;
  name: string;
  type: string;
}

export type GetDatabaseServicesResponse = DatabaseService[];

export interface GetWpConfigResponse {
  config: string;
}

export interface GetProfileResponse {
  profile: {
    time: number;
    queries: {
      sql: string;
      time: number;
    }[];
  };
}

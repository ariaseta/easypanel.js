export interface GetGithubTokenResponse {
  token: string | null;
}

export interface GetDailyDockerCleanupResponse {
  enabled: boolean;
}

export interface GetLetsEncryptEmailResponse {
  email: string | null;
}

export interface GetPanelDomainResponse {
  domain: string | null;
}

export interface GetServerIpResponse {
  ip: string;
}

export interface GetDemoModeResponse {
  enabled: boolean;
}

export interface GetGoogleAnalyticsMeasurementIdResponse {
  id: string | null;
}

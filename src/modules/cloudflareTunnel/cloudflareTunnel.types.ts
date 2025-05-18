export interface CloudflareTunnelConfig {
  enabled: boolean;
  token: string;
  accountId: string;
  tunnelId: string;
  tunnelName: string;
}

export interface GetConfigResponse {
  config: CloudflareTunnelConfig;
}

export interface CloudflareAccount {
  id: string;
  name: string;
}

export type ListAccountsResponse = CloudflareAccount[];

export interface CloudflareTunnel {
  id: string;
  name: string;
  createdAt: string;
  deletedAt: string | null;
  status: string;
}

export type ListTunnelsResponse = CloudflareTunnel[];

export interface CloudflareZone {
  id: string;
  name: string;
  status: string;
}

export type ListZonesResponse = CloudflareZone[];

export interface CloudflareTunnelRule {
  hostname: string;
  service: string;
  path: string;
}

export type GetTunnelRulesResponse = CloudflareTunnelRule[];

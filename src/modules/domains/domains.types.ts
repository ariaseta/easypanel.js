export interface GetPrimaryDomainResponse {
  domain: string | null;
}

export interface Domain {
  id: string;
  domain: string;
  primary: boolean;
  createdAt: string;
  updatedAt: string;
}

export type ListDomainsResponse = Domain[];

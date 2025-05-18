export interface Middleware {
  id: string;
  name: string;
  type: string;
  config: {
    ipAllowList?: string[];
    ipBlockList?: string[];
    basicAuth?: {
      users: string[];
    };
    redirectRegex?: {
      regex: string;
      replacement: string;
      permanent: boolean;
    };
    redirectScheme?: {
      scheme: string;
      port: string;
      permanent: boolean;
    };
    stripPrefix?: {
      prefixes: string[];
    };
    addPrefix?: {
      prefix: string;
    };
    headers?: {
      customRequestHeaders?: Record<string, string>;
      customResponseHeaders?: Record<string, string>;
    };
    rateLimit?: {
      average: number;
      burst: number;
    };
  };
  createdAt: string;
  updatedAt: string;
}

export type ListMiddlewaresResponse = Middleware[];

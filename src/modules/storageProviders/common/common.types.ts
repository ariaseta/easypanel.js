export interface StorageProvider {
  id: string;
  name: string;
  type: string;
  config: {
    accessKey?: string;
    secretKey?: string;
    region?: string;
    bucket?: string;
    endpoint?: string;
    path?: string;
  };
  createdAt: string;
  updatedAt: string;
}

export type ListResponse = StorageProvider[];

export interface StorageProviderOption {
  id: string;
  name: string;
  type: string;
  fields: {
    name: string;
    type: string;
    required: boolean;
  }[];
}

export type ListOptionsResponse = StorageProviderOption[];

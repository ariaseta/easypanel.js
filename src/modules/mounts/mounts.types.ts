export interface Mount {
  id: string;
  name: string;
  type: string;
  config: {
    hostPath?: string;
    nfsServer?: string;
    nfsPath?: string;
    s3AccessKey?: string;
    s3SecretKey?: string;
    s3Bucket?: string;
    s3Region?: string;
    s3Endpoint?: string;
    s3Path?: string;
  };
  createdAt: string;
  updatedAt: string;
}

export type ListMountsResponse = Mount[];

export interface User {
  id: string;
  createdAt: string;
  email: string;
  admin: boolean;
  password: string;
  apiToken: string;
}

export type ListUsersResponse = User[];

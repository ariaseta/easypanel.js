import { Client } from "@/Client";

import {
  GetSessionResponse,
  GetUserResponse,
  LoginResponse,
  LogoutResponse,
} from "./auth.types";
import { LoginInput } from "./auth.dto";

export class AuthManager {
  constructor(private client: Client) {}

  /**
   * Get the current authenticated user
   * @returns User information
   */
  async getUser() {
    const { data } = await this.client.http.get<GetUserResponse>(
      "/auth.getUser"
    );

    return data;
  }

  /**
   * Get the current session information
   * @returns Session information
   */
  async getSession() {
    const { data } = await this.client.http.get<GetSessionResponse>(
      "/auth.getSession"
    );

    return data;
  }

  /**
   * Login with email and password
   * @param body Login credentials
   * @returns Login response with token
   */
  async login(body: LoginInput) {
    await this.client.validateInput(body);

    const { data } = await this.client.http.post<LoginResponse>(
      "/auth.login",
      body
    );

    return data;
  }

  /**
   * Logout the current user
   * @returns Logout response
   */
  async logout() {
    const { data } = await this.client.http.get<LogoutResponse>("/auth.logout");

    return data;
  }
}

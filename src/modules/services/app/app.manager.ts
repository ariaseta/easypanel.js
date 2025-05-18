import { Client } from "@/Client";
import {
  CreateServiceInput,
  DisableGithubDeployInput,
  EnableGithubDeployInput,
  GetExposedPortsInput,
  InspectServiceInput,
  UpdateBasicAuthInput,
  UpdateBuildInput,
  UpdateDeployInput,
  UpdateEnvInput,
  UpdatePortsInput,
  UpdateProxyInput,
  UpdateRedirectsInput,
  UpdateResourcesInput,
  UpdateSourceGitInput,
  UpdateSourceGithubInput
} from "./app.dto";
import {
  CreateServiceResponse,
  DisableGithubDeployResponse,
  EnableGithubDeployResponse,
  GetExposedPortsResponse,
  InspectServiceResponse,
  UpdateBasicAuthResponse,
  UpdateBuildResponse,
  UpdateDeployResponse,
  UpdateEnvResponse,
  UpdatePortsResponse,
  UpdateProxyResponse,
  UpdateRedirectsResponse,
  UpdateResourcesResponse,
  UpdateSourceGitResponse,
  UpdateSourceGithubResponse
} from "./app.types";

export class AppServiceManager {
  constructor(private client: Client) {}

  /**
   * Inspect a service
   * @param input Service input
   * @returns Service details
   */
  async inspectService(input: InspectServiceInput) {
    await this.client.validateInput(input);

    const { data } = await this.client.http.get<InspectServiceResponse>(
      "/services.app.inspectService",
      {
        params: input,
      }
    );

    return data;
  }

  /**
   * Get exposed ports
   * @param input Service input
   * @returns Exposed ports
   */
  async getExposedPorts(input: GetExposedPortsInput) {
    await this.client.validateInput(input);

    const { data } = await this.client.http.get<GetExposedPortsResponse>(
      "/services.app.getExposedPorts",
      {
        params: input,
      }
    );

    return data;
  }

  /**
   * Create a service
   * @param input Service creation input
   * @returns Created service
   */
  async createService(input: CreateServiceInput) {
    await this.client.validateInput(input);

    const { data } = await this.client.http.post<CreateServiceResponse>(
      "/services.app.createService",
      input
    );

    return data;
  }

  /**
   * Update service deployment configuration
   * @param input Deploy update input
   * @returns Update response
   */
  async updateDeploy(input: UpdateDeployInput) {
    await this.client.validateInput(input);

    const { data } = await this.client.http.post<UpdateDeployResponse>(
      "/services.app.updateDeploy",
      input
    );

    return data;
  }

  /**
   * Update service resources
   * @param input Resources update input
   * @returns Update response
   */
  async updateResources(input: UpdateResourcesInput) {
    await this.client.validateInput(input);

    const { data } = await this.client.http.post<UpdateResourcesResponse>(
      "/services.app.updateResources",
      input
    );

    return data;
  }

  /**
   * Update service environment variables
   * @param input Environment update input
   * @returns Update response
   */
  async updateEnv(input: UpdateEnvInput) {
    await this.client.validateInput(input);

    const { data } = await this.client.http.post<UpdateEnvResponse>(
      "/services.app.updateEnv",
      input
    );

    return data;
  }

  /**
   * Update service ports
   * @param input Ports update input
   * @returns Update response
   */
  async updatePorts(input: UpdatePortsInput) {
    await this.client.validateInput(input);

    const { data } = await this.client.http.post<UpdatePortsResponse>(
      "/services.app.updatePorts",
      input
    );

    return data;
  }

  /**
   * Update service basic authentication
   * @param input Basic auth update input
   * @returns Update response
   */
  async updateBasicAuth(input: UpdateBasicAuthInput) {
    await this.client.validateInput(input);

    const { data } = await this.client.http.post<UpdateBasicAuthResponse>(
      "/services.app.updateBasicAuth",
      input
    );

    return data;
  }

  /**
   * Update service proxy configuration
   * @param input Proxy update input
   * @returns Update response
   */
  async updateProxy(input: UpdateProxyInput) {
    await this.client.validateInput(input);

    const { data } = await this.client.http.post<UpdateProxyResponse>(
      "/services.app.updateProxy",
      input
    );

    return data;
  }

  /**
   * Update service redirects
   * @param input Redirects update input
   * @returns Update response
   */
  async updateRedirects(input: UpdateRedirectsInput) {
    await this.client.validateInput(input);

    const { data } = await this.client.http.post<UpdateRedirectsResponse>(
      "/services.app.updateRedirects",
      input
    );

    return data;
  }

  /**
   * Update service GitHub source
   * @param input GitHub source update input
   * @returns Update response
   */
  async updateSourceGithub(input: UpdateSourceGithubInput) {
    await this.client.validateInput(input);

    const { data } = await this.client.http.post<UpdateSourceGithubResponse>(
      "/services.app.updateSourceGithub",
      input
    );

    return data;
  }

  /**
   * Update service Git source
   * @param input Git source update input
   * @returns Update response
   */
  async updateSourceGit(input: UpdateSourceGitInput) {
    await this.client.validateInput(input);

    const { data } = await this.client.http.post<UpdateSourceGitResponse>(
      "/services.app.updateSourceGit",
      input
    );

    return data;
  }

  /**
   * Enable GitHub automatic deployment
   * @param input Enable GitHub deploy input
   * @returns Enable response
   */
  async enableGithubDeploy(input: EnableGithubDeployInput) {
    await this.client.validateInput(input);

    const { data } = await this.client.http.post<EnableGithubDeployResponse>(
      "/services.app.enableGithubDeploy",
      input
    );

    return data;
  }

  /**
   * Disable GitHub automatic deployment
   * @param input Disable GitHub deploy input
   * @returns Disable response
   */
  async disableGithubDeploy(input: DisableGithubDeployInput) {
    await this.client.validateInput(input);

    const { data } = await this.client.http.post<DisableGithubDeployResponse>(
      "/services.app.disableGithubDeploy",
      input
    );

    return data;
  }

  /**
   * Update service build configuration
   * @param input Build update input
   * @returns Update response
   */
  async updateBuild(input: UpdateBuildInput) {
    await this.client.validateInput(input);

    const { data } = await this.client.http.post<UpdateBuildResponse>(
      "/services.app.updateBuild",
      input
    );

    return data;
  }
}

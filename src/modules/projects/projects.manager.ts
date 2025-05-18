import { Client } from "@/Client";

import {
  CanCreateProjectResponse,
  CreateProjectResponse,
  DestroyProjectResponse,
  GetDockerContainersResponse,
  GetDockerServicesResponse,
  InspectProjectResponse,
  ListProjectsAndServicesResponse,
  ListProjectsResponse,
  UpdateAccessResponse,
  UpdateProjectEnvResponse,
} from "./projects.types";
import {
  CreateProjectInput,
  DestroyProjectInput,
  GetDockerContainersInput,
  GetDockerServicesInput,
  InspectProjectInput,
  UpdateAccessInput,
  UpdateProjectEnvInput,
} from "./projects.dto";

export class ProjectsManager {
  constructor(private client: Client) {}

  /**
   * List all projects
   * @returns List of projects
   */
  async list() {
    const { data } = await this.client.http.get<ListProjectsResponse>(
      "/projects.listProjects"
    );

    return data;
  }

  /**
   * List all projects with their services
   * @returns List of projects and services
   */
  async listWithServices() {
    const { data } = await this.client.http.get<ListProjectsAndServicesResponse>(
      "/projects.listProjectsAndServices"
    );

    return data;
  }

  /**
   * Inspect a project
   * @param body Project name
   * @returns Project details
   */
  async inspect(body: InspectProjectInput) {
    await this.client.validateInput(body);

    const { data } = await this.client.http.get<InspectProjectResponse>(
      "/projects.inspectProject",
      {
        params: body,
      }
    );

    return data;
  }

  /**
   * Create a new project
   * @param body Project details
   * @returns Created project
   */
  async create(body: CreateProjectInput) {
    await this.client.validateInput(body);

    const { data } = await this.client.http.post<CreateProjectResponse>(
      "/projects.createProject",
      body
    );

    return data;
  }

  /**
   * Destroy a project
   * @param body Project name
   * @returns null
   */
  async destroy(body: DestroyProjectInput) {
    await this.client.validateInput(body);

    const { data } = await this.client.http.post<DestroyProjectResponse>(
      "/projects.destroyProject",
      body
    );

    return data;
  }

  /**
   * Check if user can create more projects
   * @returns Boolean indicating if user can create more projects
   */
  async canCreate() {
    const { data } = await this.client.http.get<CanCreateProjectResponse>(
      "/projects.canCreateProject"
    );

    return data.canCreate;
  }

  /**
   * Get Docker containers for a service
   * @param input Service input
   * @returns Docker containers
   */
  async getDockerContainers(input: GetDockerContainersInput) {
    await this.client.validateInput(input);

    const { data } = await this.client.http.get<GetDockerContainersResponse>(
      "/projects.getDockerContainers",
      {
        params: input,
      }
    );

    return data;
  }

  /**
   * Get Docker services for a project
   * @param input Project input
   * @returns Docker services
   */
  async getDockerServices(input: GetDockerServicesInput) {
    await this.client.validateInput(input);

    const { data } = await this.client.http.get<GetDockerServicesResponse>(
      "/projects.getDockerServices",
      {
        params: input,
      }
    );

    return data;
  }

  /**
   * Update project environment variables
   * @param input Project env input
   * @returns Update response
   */
  async updateProjectEnv(input: UpdateProjectEnvInput) {
    await this.client.validateInput(input);

    const { data } = await this.client.http.post<UpdateProjectEnvResponse>(
      "/projects.updateProjectEnv",
      input
    );

    return data;
  }

  /**
   * Update project access for a user
   * @param input Access input
   * @returns Update response
   */
  async updateAccess(input: UpdateAccessInput) {
    await this.client.validateInput(input);

    const { data } = await this.client.http.post<UpdateAccessResponse>(
      "/projects.updateAccess",
      input
    );

    return data;
  }
}

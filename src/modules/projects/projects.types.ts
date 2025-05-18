export interface Project {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}

export interface Service {
  id: string;
  name: string;
  type: string;
  projectName: string;
  createdAt: string;
  updatedAt: string;
  status: string;
}

export type ListProjectsResponse = Project[];

export interface ListProjectsAndServicesResponse {
  projects: Project[];
  services: Service[];
}

export interface InspectProjectResponse {
  project: Project;
}

export interface CreateProjectResponse extends Project {}

export interface DestroyProjectResponse {}

export interface CanCreateProjectResponse {
  canCreate: boolean;
}

export interface DockerContainer {
  id: string;
  name: string;
  image: string;
  status: string;
  ports: string[];
}

export type GetDockerContainersResponse = DockerContainer[];

export interface DockerService {
  id: string;
  name: string;
  image: string;
  status: string;
  ports: string[];
}

export type GetDockerServicesResponse = DockerService[];

export interface UpdateProjectEnvResponse {
  success: boolean;
}

export interface UpdateAccessResponse {
  success: boolean;
}

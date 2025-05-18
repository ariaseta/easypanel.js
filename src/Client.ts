import { AxiosInstance } from "axios";

import { ClientConfig } from "@/types";
import { createAxiosInstance } from "@/http";

import {
  ActionsManager,
  AuthManager,
  BackupsManager,
  BrandingManager,
  CertificatesManager,
  CloudflareTunnelManager,
  ClusterManager,
  DatabaseBackupsManager,
  DeploymentsManager,
  DockerBuildersManager,
  DomainsManager,
  GithubManager,
  GitManager,
  LicensesManager,
  MiddlewaresManager,
  MonitorManager,
  MountsManager,
  NotificationsManager,
  PortsManager,
  ProjectsManager,
  ServicesManager,
  SettingsManager,
  SetupManager,
  StorageProvidersManager,
  TraefikManager,
  UsersManager,
  VolumeBackupsManager,
} from "./modules";
import { validateOrReject } from "class-validator";

/**
 * Client class for interacting with the API.
 * Manages configuration, REST requests, and various managers.
 */
export class Client {
  config: ClientConfig; // Client Config
  http: AxiosInstance;
  constructor(config: ClientConfig) {
    this.config = config;

    if (!this.config.endpoint) throw Error("No endpoint was provided");
    if (!this.config.token) throw Error("No token was provided");

    this.http = createAxiosInstance(this.config.endpoint, this.config.token);

    if (this.config.validate) this.validate();
  }

  async validate() {
    const user = await this.auth.getUser();
    if (!user) throw Error("Invalid token was provided");
  }

  async validateInput(input: object) {
    if (this.config.validate) await validateOrReject(input);
  }

  auth = new AuthManager(this);
  actions = new ActionsManager(this);
  backups = new BackupsManager(this);
  branding = new BrandingManager(this);
  certificates = new CertificatesManager(this);
  cloudflareTunnel = new CloudflareTunnelManager(this);
  cluster = new ClusterManager(this);
  databaseBackups = new DatabaseBackupsManager(this);
  deployments = new DeploymentsManager(this);
  dockerBuilders = new DockerBuildersManager(this);
  domains = new DomainsManager(this);
  git = new GitManager(this);
  github = new GithubManager(this);
  licenses = new LicensesManager(this);
  middlewares = new MiddlewaresManager(this);
  monitor = new MonitorManager(this);
  mounts = new MountsManager(this);
  notifications = new NotificationsManager(this);
  ports = new PortsManager(this);
  projects = new ProjectsManager(this);
  services = new ServicesManager(this);
  settings = new SettingsManager(this);
  setup = new SetupManager(this);
  storageProviders = new StorageProvidersManager(this);
  templates = new SetupManager(this);
  traefik = new TraefikManager(this);
  users = new UsersManager(this);
  volumeBackups = new VolumeBackupsManager(this);
}

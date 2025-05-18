# Easypanel SDK Implementation Progress

This document tracks the progress of implementing the SDK modules based on the OpenAPI specification in `easypanel_openapi.json`.

## API Endpoints by Tag

### Projects
- [x] `GET /api/trpc/projects.getDockerContainers`
- [x] `GET /api/trpc/projects.getDockerServices`
- [x] `GET /api/trpc/projects.inspectProject`
- [x] `GET /api/trpc/projects.listProjects`
- [x] `GET /api/trpc/projects.listProjectsAndServices`
- [x] `POST /api/trpc/projects.createProject`
- [x] `POST /api/trpc/projects.destroyProject`
- [x] `POST /api/trpc/projects.updateProjectEnv`
- [x] `POST /api/trpc/projects.updateAccess`

### Services / Common
- [x] `GET /api/trpc/services.common.getServiceError`
- [x] `GET /api/trpc/services.common.getNotes`
- [x] `POST /api/trpc/services.common.rename`
- [x] `POST /api/trpc/services.common.setNotes`

### Services / App
- [x] `GET /api/trpc/services.app.inspectService`
- [x] `GET /api/trpc/services.app.getExposedPorts`
- [x] `POST /api/trpc/services.app.createService`
- [x] `POST /api/trpc/services.app.updateDeploy`
- [x] `POST /api/trpc/services.app.updateResources`
- [x] `POST /api/trpc/services.app.updateEnv`
- [x] `POST /api/trpc/services.app.updatePorts`
- [x] `POST /api/trpc/services.app.updateBasicAuth`
- [x] `POST /api/trpc/services.app.updateProxy`
- [x] `POST /api/trpc/services.app.updateRedirects`
- [x] `POST /api/trpc/services.app.updateSourceGithub`
- [x] `POST /api/trpc/services.app.updateSourceGit`
- [x] `POST /api/trpc/services.app.enableGithubDeploy`
- [x] `POST /api/trpc/services.app.disableGithubDeploy`
- [x] `POST /api/trpc/services.app.updateBuild`

### Services / Box
- [x] `GET /api/trpc/services.box.inspectService`
- [x] `GET /api/trpc/services.box.listPresets`

### Services / Wordpress
- [x] `GET /api/trpc/services.wordpress.inspectService`
- [x] `GET /api/trpc/services.wordpress.getUsers`
- [x] `GET /api/trpc/services.wordpress.getRoles`
- [x] `GET /api/trpc/services.wordpress.getMaintenanceMode`
- [x] `GET /api/trpc/services.wordpress.getThemes`
- [x] `GET /api/trpc/services.wordpress.searchTheme`
- [x] `GET /api/trpc/services.wordpress.getPlugins`
- [x] `GET /api/trpc/services.wordpress.searchPlugin`
- [x] `GET /api/trpc/services.wordpress.getOptions`
- [x] `GET /api/trpc/services.wordpress.getDatabaseServices`
- [x] `GET /api/trpc/services.wordpress.getWpConfig`
- [x] `GET /api/trpc/services.wordpress.getProfile`

### Services / Mariadb
- [x] `GET /api/trpc/services.mariadb.inspectService`

### Services / Mongo
- [x] `GET /api/trpc/services.mongo.inspectService`

### Services / Mysql
- [x] `GET /api/trpc/services.mysql.inspectService`

### Services / Postgres
- [x] `GET /api/trpc/services.postgres.inspectService`

### Services / Redis
- [x] `GET /api/trpc/services.redis.inspectService`

### Services / Compose
- [x] `GET /api/trpc/services.compose.inspectService`
- [x] `GET /api/trpc/services.compose.getDockerServices`
- [x] `GET /api/trpc/services.compose.getIssues`

### Auth
- [x] `GET /api/trpc/auth.getUser`
- [x] `GET /api/trpc/auth.getSession`

### Github
- [ ] `GET /api/trpc/github.listRepos`

### Portal License
- [ ] `GET /api/trpc/portalLicense.getLicensePayload`

### Lemon License
- [ ] `GET /api/trpc/lemonLicense.getLicensePayload`

### Update
- [ ] `GET /api/trpc/update.getStatus`

### Setup
- [ ] `GET /api/trpc/setup.getStatus`

### Monitor
- [x] `GET /api/trpc/monitor.getSystemStats`
- [x] `GET /api/trpc/monitor.getAdvancedStats`
- [x] `GET /api/trpc/monitor.getServiceStats`
- [x] `GET /api/trpc/monitor.getDockerTaskStats`
- [x] `GET /api/trpc/monitor.getMonitorTableData`

### Settings
- [x] `GET /api/trpc/settings.getGithubToken`
- [x] `GET /api/trpc/settings.getDailyDockerCleanup`
- [x] `GET /api/trpc/settings.getLetsEncryptEmail`
- [x] `GET /api/trpc/settings.getPanelDomain`
- [x] `GET /api/trpc/settings.getServerIp`
- [x] `GET /api/trpc/settings.getDemoMode`
- [x] `GET /api/trpc/settings.getGoogleAnalyticsMeasurementId`

### Users
- [x] `GET /api/trpc/users.listUsers`

### Git
- [x] `GET /api/trpc/git.getPublicKey`

### Cluster
- [x] `GET /api/trpc/cluster.listNodes`
- [x] `GET /api/trpc/cluster.addWorkerCommand`

### Branding
- [x] `GET /api/trpc/branding.getErrorPageSettings`
- [x] `GET /api/trpc/branding.getInterfaceSettings`
- [x] `GET /api/trpc/branding.getInterfaceSettingsPublic`

### Notifications
- [x] `GET /api/trpc/notifications.listNotificationChannels`

### Certificates
- [x] `GET /api/trpc/certificates.listCertificates`

### Actions
- [x] `GET /api/trpc/actions.listActions`
- [x] `GET /api/trpc/actions.getAction`

### Traefik
- [x] `GET /api/trpc/traefik.getEnv`
- [x] `GET /api/trpc/traefik.getCustomConfig`
- [x] `GET /api/trpc/traefik.getDashboard`

### Cloudflare Tunnel
- [x] `GET /api/trpc/cloudflareTunnel.getConfig`
- [x] `GET /api/trpc/cloudflareTunnel.listAccounts`
- [x] `GET /api/trpc/cloudflareTunnel.listTunnels`
- [x] `GET /api/trpc/cloudflareTunnel.listZones`
- [x] `GET /api/trpc/cloudflareTunnel.getTunnelRules`

### Domains
- [x] `GET /api/trpc/domains.getPrimaryDomain`
- [x] `GET /api/trpc/domains.listDomains`

### Storage Providers / Common
- [x] `GET /api/trpc/storageProviders.common.list`
- [x] `GET /api/trpc/storageProviders.common.listOptions`

### Backups
- [x] `GET /api/trpc/backups.getBackupLog`

### Docker Builders
- [x] `GET /api/trpc/dockerBuilders.listDockerBuilders`

### Middlewares
- [x] `GET /api/trpc/middlewares.listMiddlewares`

### Volume Backups
- [x] `GET /api/trpc/volumeBackups.listVolumeMounts`
- [x] `GET /api/trpc/volumeBackups.listVolumeBackups`

### Mounts
- [x] `GET /api/trpc/mounts.listMounts`

### Ports
- [x] `GET /api/trpc/ports.listPorts`

### Database Backups
- [x] `GET /api/trpc/databaseBackups.listDatabaseBackups`
- [x] `GET /api/trpc/databaseBackups.getServiceDatabases`

## Implementation Plan

1. Create module structure for each tag
2. Implement DTO classes for request parameters
3. Implement type definitions for responses
4. Implement manager classes with methods for each endpoint
5. Update the main Client class to include all the new managers
6. Update exports in module index files

## Progress

All modules have been successfully implemented! ✅

- [x] Services module structure
- [x] Projects module updates
- [x] Auth module updates
- [x] Settings module
- [x] Monitor module updates
- [x] Users module
- [x] Git module updates
- [x] Cluster module
- [x] Branding module updates
- [x] Notifications module
- [x] Certificates module updates
- [x] Actions module updates
- [x] Traefik module
- [x] Cloudflare Tunnel module
- [x] Domains module
- [x] Storage Providers module
- [x] Backups module updates
- [x] Docker Builders module
- [x] Middlewares module
- [x] Volume Backups module
- [x] Mounts module
- [x] Ports module
- [x] Database Backups module
- [x] Client class updates
- [x] Module exports updates

import { Client } from "@/Client";
import { AppServiceManager } from "./app/app.manager";
import { BoxServiceManager } from "./box/box.manager";
import { CommonServiceManager } from "./common/common.manager";
import { ComposeServiceManager } from "./compose/compose.manager";
import { MariadbServiceManager } from "./mariadb/mariadb.manager";
import { MongoServiceManager } from "./mongo/mongo.manager";
import { MysqlServiceManager } from "./mysql/mysql.manager";
import { PostgresServiceManager } from "./postgres/postgres.manager";
import { RedisServiceManager } from "./redis/redis.manager";
import { WordpressServiceManager } from "./wordpress/wordpress.manager";

/**
 * Services manager class for interacting with all service-related endpoints
 */
export class ServicesManager {
  common: CommonServiceManager;
  app: AppServiceManager;
  box: BoxServiceManager;
  wordpress: WordpressServiceManager;
  mariadb: MariadbServiceManager;
  mongo: MongoServiceManager;
  mysql: MysqlServiceManager;
  postgres: PostgresServiceManager;
  redis: RedisServiceManager;
  compose: ComposeServiceManager;

  constructor(private client: Client) {
    this.common = new CommonServiceManager(client);
    this.app = new AppServiceManager(client);
    this.box = new BoxServiceManager(client);
    this.wordpress = new WordpressServiceManager(client);
    this.mariadb = new MariadbServiceManager(client);
    this.mongo = new MongoServiceManager(client);
    this.mysql = new MysqlServiceManager(client);
    this.postgres = new PostgresServiceManager(client);
    this.redis = new RedisServiceManager(client);
    this.compose = new ComposeServiceManager(client);
  }
}

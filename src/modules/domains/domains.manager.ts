import { Client } from "@/Client";
import { GetPrimaryDomainResponse, ListDomainsResponse } from "./domains.types";

export class DomainsManager {
  constructor(private client: Client) {}

  /**
   * Get primary domain
   * @returns Primary domain
   */
  async getPrimaryDomain() {
    const { data } = await this.client.http.get<GetPrimaryDomainResponse>(
      "/domains.getPrimaryDomain"
    );

    return data;
  }

  /**
   * List domains
   * @returns List of domains
   */
  async listDomains() {
    const { data } = await this.client.http.get<ListDomainsResponse>(
      "/domains.listDomains"
    );

    return data;
  }
}

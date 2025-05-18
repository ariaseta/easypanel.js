import { Client } from "@/Client";

import {
  ListCertificatesResponse,
  RemoveCertificateResponse,
} from "./certificates.types";
import { RemoveCertificateInput } from "./certificates.dto";

export class CertificatesManager {
  constructor(private client: Client) {}

  /**
   * List all certificates
   * @returns List of certificates
   */
  async list() {
    const { data } = await this.client.http.get<ListCertificatesResponse>(
      "/certificates.listCertificates"
    );

    return data;
  }

  /**
   * Remove a certificate
   * @param input Certificate domain
   * @returns Remove certificate response
   */
  async remove(input: RemoveCertificateInput) {
    await this.client.validateInput(input);

    const { data } = await this.client.http.post<RemoveCertificateResponse>(
      "/certificates.removeCertificate",
      input
    );

    return data;
  }
}

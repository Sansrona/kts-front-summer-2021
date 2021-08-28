import qs from "qs";

import { ApiResponse, IApiStore, RequestParams, StatusHTTP } from "./types";

export default class ApiStore implements IApiStore {
  readonly baseUrl: string;
  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  async request<SuccessT, ErrorT = any, ReqT = {}>({
    method,
    endpoint,
    headers,
    data,
  }: RequestParams<ReqT>): Promise<ApiResponse<SuccessT, ErrorT>> {
    const url =
      method === "GET"
        ? `${this.baseUrl}${endpoint}?${qs.stringify(data)}`
        : `${this.baseUrl}${endpoint}`;
    const options =
      method === "GET"
        ? { method, headers }
        : { method, headers, body: JSON.stringify(data) };
    try {
      const response = await fetch(url, options);
      if (response.ok) {
        return {
          success: true,
          data: await response.json(),
          status: response.status,
        };
      }

      return {
        success: false,
        data: await response.json(),
        status: response.status,
      };
    } catch (e) {
      return {
        success: false,
        data: e,
        status: StatusHTTP.UNEXPECTED_ERROR,
      };
    }
  }
}

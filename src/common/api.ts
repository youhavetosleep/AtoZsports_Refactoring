import axios, { AxiosInstance, AxiosRequestConfig } from "axios";

export interface ApiRequestConfig extends AxiosRequestConfig {
  isAuthRequired?: boolean;
}

const BASE_URL = process.env.API_BASE_URL;
export default class BaseApi {
  client: AxiosInstance;

  constructor(baseUrl: string) {
    this.client = axios.create({
      baseURL: `${BASE_URL}${baseUrl}`,
    });
  }

  async get<T = any>(url: string, config?: ApiRequestConfig) {
    const result = await this.client.get<T>(url, config);
    return result.data;
  }

  async put<T = any>(url: string, data?: any, config?: ApiRequestConfig) {
    const result = await this.client.put<T>(url, data, config);
    return result.data;
  }

  async post<T = any>(url: string, data?: any, config?: ApiRequestConfig) {
    const result = await this.client.post<T>(url, data, config);
    return result.data;
  }

  async delete<T = any>(url: string, config?: ApiRequestConfig) {
    const result = await this.client.delete<T>(url, config);
    return result.data;
  }
}

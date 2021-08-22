import { ApiResponse, IApiStore, RequestParams } from "./types";
import qs from 'qs';

export default class ApiStore implements IApiStore {
    readonly baseUrl: string
    constructor(
        baseUrl: "https://api.github.com"
    ) {
        this.baseUrl = baseUrl
    }


    async request<SuccessT, ErrorT = any, ReqT = {}>({ method, endpoint, headers, data }: RequestParams<ReqT>): Promise<ApiResponse<SuccessT, ErrorT>> {
        try {
            const query = qs.stringify(data);
            const response = await fetch(`${this.baseUrl}${endpoint}${query}`, {
                method: method,
                headers: headers,
                //body: JSON.stringify(data)

            });
            return {
                success: true,
                data: await response.json(),
                status: response.status
            }
        } catch (e) {
            return {
                success: false,
                data: e,
                status: 404
            }
        }
    }

}
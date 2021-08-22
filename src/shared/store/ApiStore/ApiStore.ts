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
        const query = qs.stringify(data);
        const url = method === 'GET' ? `${this.baseUrl}${endpoint}${query}`:`${this.baseUrl}${endpoint}`
        const options =  method === 'GET'
         ? {method: method, headers: headers,}
         : {method: method, headers: headers,body: JSON.stringify(data)}
        try {
            
            const response = await fetch(url, options);
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
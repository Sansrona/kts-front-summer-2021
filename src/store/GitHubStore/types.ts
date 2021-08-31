import { ApiResponse } from "../../shared/store/ApiStore/types";

export interface GetOrganizationReposListParams{
    organizationName:string
}

export type RepoItem ={};
export interface IGitHubStore {
    getOrganizationReposList(params: GetOrganizationReposListParams): Promise<ApiResponse<RepoItem[], any>>;
    //postSomeData<ReqT={}>(params:PostSomeDataPrams<ReqT>);
}
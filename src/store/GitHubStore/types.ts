import { ApiResponse } from "src/shared/store/ApiStore/types";

// export interface GetOrganizationReposListParams { }
export type RepoItem = {
  name: string;
  owner: {
    avatar_url: string;
    login: string;
  };
  updated_at: string;
};

export interface GetOrganizationReposListParams {
  organizationName: string;
}

export interface PostSomeDataPrams<ReqT> {
  data: ReqT;
}

export interface IGitHubStore {
  getOrganizationReposList<RepoItem>(
    params: GetOrganizationReposListParams
  ): Promise<ApiResponse<RepoItem[], any>>;
  //postSomeData<ReqT={}>(params:PostSomeDataPrams<ReqT>);
}

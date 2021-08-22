export interface GetOrganizationReposListParams{

}

export interface ApiResp<RepoItem> {
    data: RepoItem,
}

export interface GetOrganizationReposListParams{
    organizationName:string
}


export interface PostSomeDataPrams<ReqT>{
    data:ReqT
}

export interface IGitHubStore {
    getOrganizationReposList<RepoItem>(params: GetOrganizationReposListParams): Promise<ApiResp<RepoItem[]>>;
    //postSomeData<ReqT={}>(params:PostSomeDataPrams<ReqT>);
}
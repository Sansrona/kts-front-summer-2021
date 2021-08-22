export interface GetOrganizationReposListParams{

}

export interface RepoItem {
    name: string,

}

export interface ApiResp<RepoItem> {
    data: RepoItem,
}

export interface GetOrganizationReposListParams{
    organizationName:string
}



export interface PostSomeDataPrams{
    data:{}
}




export interface IGitHubStore {
    getOrganizationReposList<RepoItem>(params: GetOrganizationReposListParams): Promise<ApiResp<RepoItem[]>>;
    //postSomeData(params:PostSomeDataPrams);
}
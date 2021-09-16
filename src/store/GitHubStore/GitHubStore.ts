import ApiStore from "../../shared/store/ApiStore";
import { ApiResponse, HTTPMethod } from "../../shared/store/ApiStore/types";
import {
  GetOrganizationRepoBranchesListParams,
  GetOrganizationReposListParams,
  IGitHubStore,
} from "./types";

export default class GitHubStore implements IGitHubStore {
  private readonly apiStore = new ApiStore("https://api.github.com"); // TODO: не забудьте передать baseUrl в конструктор

  // TODO: реализовать интерфейс IGitHubStore

  async getOrganizationReposList<RepoItem = {}>({
    organizationName,
    PER_PAGE,
    currentPage,
  }: GetOrganizationReposListParams): Promise<ApiResponse<RepoItem[], any>> {
    return await this.apiStore.request({
      method: HTTPMethod.GET,
      endpoint: `/orgs/${organizationName}/repos`,
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      data: {
        per_page: PER_PAGE,
        page: currentPage,
      },
    });

    // TODO: Здесь сделайте вызов из this.apiStore и верните результат
    // Документация github: https://docs.github.com/en/rest/reference/repos#list-organization-repositories
  }

  async getOrganizationRepoBranchesList<BranchItem = {}>({
    owner,
    repo,
  }: GetOrganizationRepoBranchesListParams): Promise<
    ApiResponse<BranchItem[], any>
  > {
    return await this.apiStore.request({
      method: HTTPMethod.GET,
      endpoint: `/repos/${owner}/${repo}/branches`,
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      data: {},
    });
  }
}

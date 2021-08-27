import ApiStore from "../../shared/store/ApiStore";
import { HTTPMethod } from "../../shared/store/ApiStore/types";
import { ApiResp, GetOrganizationReposListParams, IGitHubStore } from "./types";

export default class GitHubStore implements IGitHubStore {
  private readonly apiStore = new ApiStore("https://api.github.com"); // TODO: не забудьте передать baseUrl в конструктор

  // TODO: реализовать интерфейс IGitHubStore

  async getOrganizationReposList<RepoItem = {}>({
    organizationName,
  }: GetOrganizationReposListParams): Promise<ApiResp<RepoItem[]>> {
    return await this.apiStore.request({
      method: HTTPMethod.GET,
      endpoint: `/orgs/${organizationName}/repos`,
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      data: {},
    });

    // TODO: Здесь сделайте вызов из this.apiStore и верните результат
    // Документация github: https://docs.github.com/en/rest/reference/repos#list-organization-repositories
  }
}

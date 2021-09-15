import React, { useEffect, useState } from "react";

import {
  Button,
  Input,
  RepoBranchesDrawer,
  RepoTile,
  SearchIcon,
} from "@components/index";
import { RepoItem } from "src/store/GitHubStore/types";

import { gitHubStore } from "../../root/root";
import styles from "./repoSearchPage.module.css";

const EXAMPLE_ORGANIZATION = "ktsstudio";

const RepoSearchPage: React.FC = () => {
  //Временно
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [repos, setRepos] = useState<RepoItem[]>([]);
  const [selectedRepo, setSelectedRepo] = useState<string>("notific");
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);

  const handleLoaging = (): void => {
    setIsLoading(true);
  };
  const handleChange = (someValue: string): void => {
    setInputValue(someValue);
  };

  const handleRepoTile = (thisRepo: string): void => {
    setSelectedRepo(thisRepo);
    setIsDrawerVisible(true);
  };

  const closeDrawer = (): void => {
    setIsDrawerVisible(false);
  };

  useEffect(() => {
    gitHubStore
      .getOrganizationReposList({
        organizationName: EXAMPLE_ORGANIZATION,
      })
      .then((result) => {
        setRepos(result.data);
      });
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.search}>
        <Input
          value={inputValue}
          onChange={handleChange}
          placeholder="Type Repo Name"
        />
        <Button disabled={isLoading} onClick={handleLoaging}>
          <SearchIcon />
        </Button>
      </div>
      <div className={styles.list}>
        {repos.map((repo) => (
          <RepoTile
            key={repo.name}
            onRepoClick={handleRepoTile}
            name={repo.name}
            owner={repo.owner}
            updated_at={repo.updated_at}
          />
        ))}
      </div>
      <RepoBranchesDrawer
        selectedRepo={selectedRepo}
        visible={isDrawerVisible}
        onCloseDrawer={closeDrawer}
      />
    </div>
  );
};

export default RepoSearchPage;

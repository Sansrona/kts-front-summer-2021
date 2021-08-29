import React, { useEffect, useState } from "react";

import {
  Button,
  Input,
  RepoBranchesDrawer,
  RepoTile,
  SearchIcon,
} from "@components/index";
import { BranchItem, RepoItem } from "src/store/GitHubStore/types";

import { gitHubStore } from "../../root/root";
import styles from "./repoSearchPage.module.css";

const EXAMPLE_ORGANIZATION = "ktsstudio";

const RepoSearchPage: React.FC = () => {
  //Временно
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState();
  const [isButtonDisabled, setButtonDisabled] = useState(false); // для кнопки
  const [repos, setRepos] = useState<RepoItem[]>([]);
  const [branches, setBranches] = useState<BranchItem[]>([]);
  const [selectedRepo, setSelectedRepo] = useState<string>("notific");
  const [isDrawerVisible, setIsDrawerVisible] = useState(false);

  const handleDisabled = (): void => {
    setButtonDisabled(!isButtonDisabled);
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
  useEffect(() => {
    gitHubStore
      .getOrganizationRepoBranchesList({
        owner: EXAMPLE_ORGANIZATION,
        repo: selectedRepo,
      })
      .then((result) => setBranches(result.data));
  }, [selectedRepo]);
  // eslint-disable-next-line no-console
  console.log(selectedRepo);
  // eslint-disable-next-line no-console
  console.log(branches);
  return (
    <div className={styles.wrapper}>
      <div className={styles.search}>
        <Input
          value={inputValue}
          onChange={handleChange}
          placeholder={"Type Repo Name"}
        />
        <Button disabled={isButtonDisabled} onClick={handleDisabled}>
          <SearchIcon />
        </Button>
      </div>
      <div className={styles.list}>
        {repos.map((repo) => (
          <RepoTile
            key={`${repo.name}`}
            onRepoClick={handleRepoTile}
            name={repo.name}
            owner={repo.owner}
            updated_at={repo.updated_at}
          />
        ))}
      </div>
      <RepoBranchesDrawer
        visible={isDrawerVisible}
        onCloseDrawer={closeDrawer}
        branches={branches}
      />
    </div>
  );
};

export default RepoSearchPage;

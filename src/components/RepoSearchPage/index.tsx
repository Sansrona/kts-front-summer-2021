import React, { useEffect, useState } from "react";

import { Button, Input, RepoTile, SearchIcon } from "@components/index";
import { RepoItem } from "src/store/GitHubStore/types";

import { gitHubStore } from "../../root/root";
import styles from "./repoSearchPage.module.css";

const EXAMPLE_ORGANIZATION = "ktsstudio";

const RepoSearchPage: React.FC = () => {
  //Временно
  const [value, setValue] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [isDisabled, setIsDisabled] = useState(false);
  const [repos, setRepos] = useState<RepoItem[]>([]);
  const handleDisabled = (): void => {
    setIsDisabled(!isDisabled);
  };
  const handleChange = (someValue: string): void => {
    setValue(someValue);
  };

  const handleRepoTile = () => {};

  useEffect(() => {
    gitHubStore
      .getOrganizationReposList({
        organizationName: EXAMPLE_ORGANIZATION,
      })
      .then((result) => {
        setRepos(result.data);
        setIsLoading(false);
      });
  }, []);
  // eslint-disable-next-line no-console
  console.log(value);
  return (
    <div className={styles.wrapper}>
      <div className={styles.search}>
        <Input
          value={value}
          onChange={handleChange}
          placeholder={"Type Repo Name"}
        />
        <Button disabled={isDisabled} onClick={handleDisabled}>
          <SearchIcon />
        </Button>
      </div>
      <div className={styles.list}>
        {!isLoading &&
          repos.map((repo) => (
            <RepoTile
              key={`${repo.name}`}
              onClick={handleRepoTile}
              name={repo.name}
              owner={repo.owner}
              updated_at={repo.updated_at}
            />
          ))}
      </div>
    </div>
  );
};

export default RepoSearchPage;

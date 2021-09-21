import React, { useState } from "react";

import { Button, Input, RepoTile, SearchIcon } from "@components/index";
import useReposContext from "@hooks/useReposContext";

import styles from "./repoSearchPage.module.scss";

const RepoSearchPage: React.FC = () => {
  //Временно
  const { repos, isLoading, load } = useReposContext();
  const [inputValue, setInputValue] = useState("");

  const handleLoading = (): void => {
    load(true);
  };
  return (
    <div className={styles.wrapper}>
      <div className={styles.search}>
        <Input
          value={inputValue}
          onChange={(e) => setInputValue(e)}
          placeholder="Type Repo Name"
        />
        <Button disabled={isLoading} onClick={handleLoading}>
          <SearchIcon />
        </Button>
      </div>
      <div className={styles.list}>
        {repos.map((repo) => (
          <RepoTile
            key={repo.name}
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

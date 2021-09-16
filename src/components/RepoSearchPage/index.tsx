import React, { useState } from "react";

import {
  Button,
  Input,
  RepoBranchesDrawer,
  RepoTile,
  SearchIcon,
} from "@components/index";
import useReposContext from "@hooks/useReposContext";
import { Link, Route } from "react-router-dom";

import styles from "./repoSearchPage.module.scss";

const RepoSearchPage: React.FC = () => {
  //Временно
  const { repos, isLoading, load } = useReposContext();
  const [inputValue, setInputValue] = useState("");

  const handleLoaging = (): void => {
    load(true);
  };
  const handleChange = (someValue: string): void => {
    setInputValue(someValue);
  };

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
          <Link to={`/repos/${repo.name}`} key={repo.name}>
            <RepoTile
              name={repo.name}
              owner={repo.owner}
              updated_at={repo.updated_at}
            />
          </Link>
        ))}
      </div>
      <Route path="/repos/:repoName">
        <RepoBranchesDrawer />
      </Route>
    </div>
  );
};

export default RepoSearchPage;

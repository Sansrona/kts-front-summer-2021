import React, { useState } from "react";

import { Button, Input, RepoCard, SearchIcon } from "@components/index";

import styles from "./Repolist.module.css";

function RepoList() {
  //Временно
  const [value, setValue] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const handleDisabled = (): void => {
    setIsDisabled(!isDisabled);
  };
  const handleChange = (someValue: string): void => {
    setValue(someValue);
  };
  //
  return (
    <div className={styles.wrapper}>
      <div className={styles.search}>
        <Input
          value={value}
          onChange={handleChange}
          placeholder={"Hello World"}
        />
        <Button disabled={isDisabled} onClick={handleDisabled}>
          <SearchIcon />
        </Button>
      </div>
      <div className={styles.list}>
        {Array(6).fill(
          <RepoCard username="kts-school-frontendkts-school-frontendkts-school-frontendkts-school-frontend" />
        )}
      </div>
    </div>
  );
}

export default RepoList;

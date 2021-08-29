import React from "react";

import { StarIcon, Avatar } from "@components/index";
import dayjs from "dayjs";
import { RepoItem } from "src/store/GitHubStore/types";

import styles from "./repoTile.module.css";

type RepoTileProps = RepoItem & {
  onRepoClick: (thisRepo: string) => void;
};

const RepoTile: React.FC<RepoTileProps> = ({
  owner,
  name,
  updated_at,
  onRepoClick,
}) => {
  const setDate = () => {
    return dayjs(updated_at).format("YYYY-MM-DD");
  };
  return (
    <div className={styles.repocard} onClick={() => onRepoClick(name)}>
      <Avatar src={owner.avatar_url} alt="Avatar" className={styles.avatar} />
      <div className={styles.cardtitle}>
        <p className={styles.title}>{name}</p>
        <p className={styles.owner}>{owner.login}</p>
        <p className={styles.metainfo}>
          <span className={styles.rating}>
            <StarIcon />
            123
          </span>
          <span>Updated at {setDate()}</span>
        </p>
      </div>
    </div>
  );
};

export default RepoTile;

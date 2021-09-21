import React from "react";

import { StarIcon, Avatar } from "@components/index";
import dayjs from "dayjs";
import { Link } from "react-router-dom";
import { RepoItem } from "src/store/GitHubStore/types";

import styles from "./repoTile.module.scss";

const RepoTile: React.FC<RepoItem> = ({ owner, name, updated_at }) => {
  const date = dayjs(updated_at).format("YYYY-MM-DD");

  return (
    <Link to={`/repos/${name}`}>
      <div className={styles.repocard}>
        <Avatar src={owner.avatar_url} alt="Avatar" className={styles.avatar} />
        <div className={styles.cardtitle}>
          <p className={styles.title}>{name}</p>
          <p className={styles.owner}>{owner.login}</p>
          <p className={styles.metainfo}>
            <span className={styles.rating}>
              <StarIcon />
              123
            </span>
            <span>Updated at {date}</span>
          </p>
        </div>
      </div>
    </Link>
  );
};

export default React.memo(RepoTile);

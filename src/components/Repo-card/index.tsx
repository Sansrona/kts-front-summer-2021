import React from "react";

import { StarIcon, Avatar } from "@components/index";
import dayjs from "dayjs";
import { RepoItem } from "src/store/GitHubStore/types";

import image from "../Avatar/avatar.png";
import styles from "./repocard.module.css";

const RepoCard: React.FC = ({ name, owner, date }: RepoItem) => {
  const setDate = () => {
    dayjs(date).format("YYYY-MM-DDTHH-mm");
  };

  return (
    <div className={styles.repocard}>
      <Avatar src={image} alt="Avatar" className={styles.avatar} />
      <div className={styles.cardtitle}>
        <p className={styles.title}>{name}</p>
        <p className={styles.owner}>{owner}</p>
        <p className={styles.metainfo}>
          <span className={styles.rating}>
            <StarIcon />
            123
          </span>
          <span>Updated {setDate()}</span>
        </p>
      </div>
    </div>
  );
};

export default RepoCard;

import React from "react";

import { StarIcon, Avatar } from "@components/index";

import image from "../Avatar/avatar.png";
import styles from "./repocard.module.css";

type s = {
  username: string;
};

function RepoCard({ username }: s) {
  return (
    <div className={styles.repocard}>
      <Avatar src={image} alt="Avatar" className={styles.avatar} />
      <div className={styles.cardtitle}>
        <p className={styles.title}>{username}</p>
        <p className={styles.username}>ktsstudio</p>
        <p className={styles.metainfo}>
          <span className={styles.rating}>
            <StarIcon />
            123
          </span>
          <span>Updated 21 Jul</span>
        </p>
      </div>
    </div>
  );
}

export default RepoCard;

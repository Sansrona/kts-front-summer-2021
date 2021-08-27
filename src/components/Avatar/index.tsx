import React from "react";

import styles from "./avatar.module.css";

type AvatarProps = {
  src?: string;
  alt?: string;
  letter?: string;
};

const Avatar = ({ src, alt, letter }: AvatarProps): JSX.Element => {
  return <img src={src} alt={alt} />;
};

export default Avatar;

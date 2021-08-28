import React from "react";

type AvatarProps = {
  src?: string;
  alt?: string;
  letter?: string;
  className?: string;
};

const Avatar: React.FC<AvatarProps> = ({ src, alt, letter, className }) => {
  return <img src={src} alt={alt} className={className} />;
};

export default React.memo(Avatar);

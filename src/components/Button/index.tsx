import React from "react";

import styles from "./button.module.scss";

type ButtonProps = React.PropsWithChildren<{
  onClick: () => void;
  disabled?: boolean;
}>;

const Button: React.FC<ButtonProps> = ({
  disabled = false,
  children,
  onClick,
}) => {
  return (
    <button className={styles.search} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default React.memo(Button);

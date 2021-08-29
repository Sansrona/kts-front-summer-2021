import React from "react";

import cn from "classnames";

import styles from "./button.module.css";

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
    <>
      <button
        className={cn(styles.search, {
          [styles.disabled]: disabled,
        })}
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
};

export default Button;

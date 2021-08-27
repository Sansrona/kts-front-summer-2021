import React from "react";

import cn from "classnames";

import styles from "./button.module.css";

type ButtonProps = React.PropsWithChildren<{
  onClick: () => void;
  disabled?: boolean;
}>;

function Button({ disabled = false, children, onClick }: ButtonProps) {
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
}

export default Button;

import React from "react";

import styles from "./input.module.css";

interface IInput {
  value: string;
  placeholder: string;
  onChange: (someValue: string) => void;
}

function Input({ value, placeholder, onChange }: IInput): JSX.Element {
  return (
    <>
      <input
        type="name"
        value={value}
        className={styles.input}
        onChange={(event) => onChange(event.target.value)}
        placeholder={placeholder}
      />
    </>
  );
}

export default Input;

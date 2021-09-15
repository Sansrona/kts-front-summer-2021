import React from "react";

import styles from "./input.module.css";

type InputProps = {
  value: string;
  placeholder: string;
  onChange: (someValue: string) => void;
};

const Input: React.FC<InputProps> = ({ value, placeholder, onChange }) => {
  return (
    <input
      type="name"
      value={value}
      className={styles.input}
      onChange={(event) => onChange(event.target.value)}
      placeholder={placeholder}
    />
  );
};

export default Input;

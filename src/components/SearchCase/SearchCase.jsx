import { useState } from "react";
import styles from "./SearchCase.module.css";

export const SearchCase = () => {
  const [inputValue, setInputValue] = useState("");
  const onChange = ({ target }) => setInputValue(target.value);
  return (
    <input
      className={styles["input-case"]}
      type="text"
      placeholder="search..."
      value={inputValue}
      onChange={onChange}
    />
  );
};

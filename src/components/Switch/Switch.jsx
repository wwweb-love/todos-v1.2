import styles from "./Switch.module.css";


export const Switch = ({ completed, disabled, setCompleted }) => {
  
  const handleChange = (e) => setCompleted(e.target.checked);

  return (
    <label className={styles["switch-container"]}>
      <input
        type="checkbox"
        className={styles["custom-switch"]}
        checked={completed}
        onChange={handleChange}
        disabled={disabled}
      />
      <span className={styles["switch-slider"]}></span>
      {completed ? "Выполнен" : "Не выполнен"}
    </label>
  );
};

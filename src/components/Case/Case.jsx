import styles from "./Case.module.css";
import { NavLink } from "react-router-dom";

export const Case = ({ title, dataCreate, id, index, setIndexCase}) => {
  return (
    <NavLink className={styles.navlink} to={`/case/${id}`} onClick={() => setIndexCase(index)}>
      <div className={styles.case}>
        <span className={styles["case-title"]}>{title}</span>
        <span className={styles["case-data-create"]}>{dataCreate}</span>
      </div>
    </NavLink>
  );
};

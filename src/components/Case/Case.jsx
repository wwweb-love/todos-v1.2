import styles from "./Case.module.css";
import { NavLink } from "react-router-dom";
import { use } from "react";

export const Case = ({ title, dataCreate, id, indexx }) => {

    return (
        <NavLink
            className={styles.navlink}
            to={`/case/${id}`}
        >
            <div className={styles.case}>
                <span className={styles["case-title"]}>{title}</span>
                <span className={styles["case-data-create"]}>{dataCreate}</span>
            </div>
        </NavLink>
    );
};

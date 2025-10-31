import styles from "./Case.module.css";
import { NavLink } from "react-router-dom";
import { use } from "react";
import { IndexCaseContext } from "../../context";

export const Case = ({ title, dataCreate, id, indexx }) => {
    const [ index, dispatch ] = use(IndexCaseContext);


    return (
        <NavLink
            className={styles.navlink}
            to={`/case/${id}`}
            onClick={() => dispatch({ type: "SET_INDEX", payload: indexx })}
        >
            <div className={styles.case}>
                <span className={styles["case-title"]}>{title}</span>
                <span className={styles["case-data-create"]}>{dataCreate}</span>
            </div>
        </NavLink>
    );
};

import styles from "./ButtonCRUD.module.css";

export const ButtonCRUD = ({ onClick, children }) => {
    return (
        <button onClick={() => onClick()} className={styles["btn-crud"]}>
            {children}
        </button>
    );
};



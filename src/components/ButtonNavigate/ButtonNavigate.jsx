import styles from "./ButtonNavigate.module.css"

export const ButtonNavigate = ({ children, onClick }) => {
    return (
        <button className={styles["btn-crud"]} onClick={onClick}>{children}</button>
    )
}

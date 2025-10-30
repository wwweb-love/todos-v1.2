import styles from "./Loading.module.css"


export const Loading = () => {
    return (
        <div className={styles['loaded-wrape']}>
            <div className={styles.loading}></div>
        </div>
    )
}
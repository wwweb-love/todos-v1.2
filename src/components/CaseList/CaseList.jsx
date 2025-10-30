import styles from "./CaseList.module.css";
import { Case } from "../Case/Case";
import { useMatch } from "react-router-dom";


export const CaseList = ({ todos, loading, setIndexCase }) => {

    const match = useMatch("/case/:id") || null;

    if (!loading) {
        return (
            <div className={styles["case-list"]}>
                {todos.map(({ id, title, dataCreate }, index) => (
                    <Case
                        key={id}
                        title={title}
                        dataCreate={dataCreate}
                        id={id}
                        index={index}
                        setIndexCase={setIndexCase}
                    />
                ))}
            </div>
        );
    }
};

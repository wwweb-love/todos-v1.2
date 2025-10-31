import styles from "./CaseList.module.css";
import { Case } from "../Case/Case";
import { use } from "react";
import { TodosContext, LoadingContext } from "../../context";

export const CaseList = () => {
    const todos = use(TodosContext);
    const loading = use(LoadingContext);

    if (!loading) {

        return (
            <div className={styles["case-list"]}>
                {todos.map(({ id, title, dataCreate }, index) => (
                    <Case
                        key={id}
                        title={title}
                        dataCreate={dataCreate}
                        id={id}
                        indexx={index}
                    />
                ))}
            </div>
        );
    }
};

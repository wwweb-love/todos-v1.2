import styles from "./CaseList.module.css";
import { Case } from "../Case/Case";
import { use } from "react";
import { TodosContext, LoadingContext } from "../../context";
import { useGetRequest } from "../../hooks/useCRUD/use-request-get";
import { RefreshContext } from "../../context";

export const CaseList = () => {
    const [ isRefresh, dispatchIsRefresh ] = use(RefreshContext)
    
    const { todos, loading } = useGetRequest(
        "http://localhost:3033/todos",
        isRefresh
    );

    if (!loading) {
        return (
            <div className={styles["case-list"]}>
                {todos.map(({ id, title, dataCreate }) => (
                    <Case
                        key={id}
                        title={title}
                        dataCreate={dataCreate}
                        id={id}
                    />
                ))}
            </div>
        );
    }
};

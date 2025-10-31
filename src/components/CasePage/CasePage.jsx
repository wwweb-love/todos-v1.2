import styles from "./CasePage.module.css";
import { useMatch } from "react-router-dom";
import { Loading } from "../Loading/Loading";
import { CasePageLayout } from "./CasePageLayout";
import { useDeleteRequest } from "../../hooks/useCRUD/use-request-delete";
import { NotFound } from "../NotFound/NotFound";
import { useNavigate } from "react-router-dom";
import {
    LoadingContext,
    TodosContext,
    IndexCaseContext,
    ShowModalContext,
} from "../../context";
import { use } from "react";
import { RefreshContext } from "../../context";

export const CasePage = () => {
    const loading = use(LoadingContext);
    const todos = use(TodosContext);
    const [index, dispatchIndex] = use(IndexCaseContext);
    const [showModal, dispatchShowModal] = use(ShowModalContext);
    const [isRefresh, dispatchRefresh] = use(RefreshContext)

    const match = useMatch("/case/:id");
    const caseId = match.params.id || null;
    const navigate = useNavigate();

    const removeItemTodos = () => {
        useDeleteRequest(`http://localhost:3033/todos/${caseId}`, dispatchRefresh, isRefresh);
        navigate("/");
        // navigate('/case', { replace: true });
    };

    const editCasePage = () => {
        dispatchShowModal({type: "SET_SHOW_MODAL_OPEN", payload: true});
    };

    if (loading)
        return (
            <div className={styles["case-page"]}>
                <Loading />
            </div>
        );
    
    if (!todos[index]) {
        return <NotFound />;
    }

    if (caseId && !loading) {
        const { title, description, dataCreate, dataDeadline, completed } =
            todos[index];

        const data = {
            title: title,
            description: description,
            dateCreate: dataCreate,
            dateDeadline: dataDeadline,
            completed: completed,
        };

        return (
            <CasePageLayout
                title={title}
                description={description}
                dataCreate={dataCreate}
                dataDeadline={dataDeadline}
                completed={completed}
                removeItemTodos={removeItemTodos}
                navigate={navigate}
                editCasePage={editCasePage}
                showModal={showModal}
                data={data}
                casePageUrlId={caseId}
            />
        );
    }
};

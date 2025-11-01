import styles from "./CasePage.module.css";
import { useMatch } from "react-router-dom";
import { Loading } from "../Loading/Loading";
import { CasePageLayout } from "./CasePageLayout";
import { useDeleteRequest } from "../../hooks/useCRUD/use-request-delete";
import { NotFound } from "../NotFound/NotFound";
import { useNavigate } from "react-router-dom";
import { ShowModalContext } from "../../context";
import { use } from "react";
import { RefreshContext } from "../../context";
import { useGetRequest } from "../../hooks/useCRUD/use-request-get";

export const CasePage = () => {
    const [showModal, dispatchShowModal] = use(ShowModalContext);
    const [isRefresh, dispatchRefresh] = use(RefreshContext);

    const match = useMatch("/case/:id");
    const caseId = match.params.id || null;
    const navigate = useNavigate();

    const { todos, loading } = useGetRequest(
        `http://localhost:3033/todos/${caseId}`,
        isRefresh
    );

    const removeItemTodos = () => {
        useDeleteRequest(
            `http://localhost:3033/todos/${caseId}`,
            dispatchRefresh,
            isRefresh
        );
        navigate("/");
        // navigate('/case', { replace: true });
    };

    const editCasePage = () => {
        dispatchShowModal({ type: "SET_SHOW_MODAL_OPEN", payload: true });
    };

    if (loading)
        return (
            <div className={styles["case-page"]}>
                <Loading />
            </div>
        );

    if (!todos) {
        return <NotFound />;
    }

    if (caseId && !loading) {
        const { title, description, dataCreate, dataDeadline, completed } =
            todos;

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

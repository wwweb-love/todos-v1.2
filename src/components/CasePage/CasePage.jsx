import styles from "./CasePage.module.css";
import { useMatch } from "react-router-dom";
import { Loading } from "../Loading/Loading";
import { CasePageLayout } from "./CasePageLayout";
import { useDeleteRequest } from "../../hooks/useCRUD/use-request-delete";
import { NotFound } from "../NotFound/NotFound";
import { useNavigate } from "react-router-dom";

export const CasePage = ({
    todos,
    loading,
    refresh,
    indexCase,
    showModal,
    setShowModal,
}) => {
    const match = useMatch("/case/:id");
    const caseId = match.params.id || null;
    const navigate = useNavigate();

    const removeItemTodos = () => {
        useDeleteRequest(`http://localhost:3033/todos/${caseId}`, refresh);
        navigate("/");
        // navigate('/case', { replace: true });
    };

    const editCasePage = () => {
        setShowModal(true);
    };

    if (loading)
        return (
            <div className={styles["case-page"]}>
                <Loading />
            </div>
        );

    if (!todos[indexCase]) {
        return <NotFound />;
    }

    if (caseId && !loading) {
        const { title, description, dataCreate, dataDeadline, completed } =
            todos[indexCase];

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
                refresh={refresh}
                setShowModal={setShowModal}
                casePageUrlId={caseId}
            />
        );
    }
};

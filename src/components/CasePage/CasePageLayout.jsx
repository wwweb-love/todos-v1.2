import { ButtonNavigate } from "../ButtonNavigate/ButtonNavigate";
import styles from "./CasePage.module.css";
import { Switch } from "../Switch/Switch";
import { ButtonCRUD } from "../ButtonCRUD/ButtonCRUD";
import { ModalCase } from "../ModalCase/ModalCase";
import { formatDate } from "../../hooks/useGetFormatData/use-get-format-data";

// title,
// setTitle,
// description,
// setDescription,
// completed,
// setCompleted,
// dataCreate,
// setDataCreate,
// dataDeadline,
// setDataDeadline,
// refresh,
// setShowModal,

export const CasePageLayout = ({
    title,
    description,
    dataCreate,
    dataDeadline,
    completed,
    removeItemTodos,
    navigate,
    editCasePage,
    showModal,
    data,
    casePageUrlId
}) => {
    return (
        <div className={styles["case-page"]}>
            {showModal && <ModalCase data={data} casePageUrlId={casePageUrlId} typeRequest={"PUT"} />}
            <div>
                <ButtonNavigate onClick={() => navigate(-1)}>
                    Назад
                </ButtonNavigate>
            </div>
            <div className={styles["content-case-page"]}>
                <h1>{title}</h1>
                <p className={styles.description}>{description}</p>
                <div className={styles["data-time"]}>
                    <p>
                        Дата создания{" "}
                        <span className={styles["data-create"]}>
                            {dataCreate}
                        </span>
                    </p>
                    <p>
                        Дата крайнего срока{" "}
                        <span className={styles["data-deadline"]}>
                            {dataDeadline}
                        </span>
                    </p>
                </div>

                <Switch completed={completed} disabled={"disabled"}></Switch>
            </div>

            <div className={styles["CRUD-btn"]}>
                <ButtonCRUD onClick={editCasePage}>Изменить</ButtonCRUD>
                <ButtonCRUD onClick={removeItemTodos}>Удалить</ButtonCRUD>
            </div>
        </div>
    );
};

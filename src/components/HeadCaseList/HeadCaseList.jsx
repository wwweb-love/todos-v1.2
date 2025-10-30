import styles from "./HeadCaseList.module.css";
import { ButtonCRUD } from "../ButtonCRUD/ButtonCRUD";
import {
    formatDate,
    formatDateDeadline,
} from "../../hooks/useGetFormatData/use-get-format-data";
import { ModalCase } from "../ModalCase/ModalCase";
import { usePostRequest } from "../../hooks/useCRUD/use-request-post";

export const HeadCaseList = ({
    refresh,
    showModal,
    setShowModal,
    todos
}) => {
    let data ={
        title: "",
        description: "",
        dataCreate: "",
        dataDeadline: "",
        completed: false,
    };

    const handleClickAddTodos = () => {
        setShowModal(!showModal);
    };

    return (
        <div className={styles["head-case"]}>
            <h1>Список дел</h1>
            <ButtonCRUD onClick={handleClickAddTodos}>Добавить</ButtonCRUD>
            <ButtonCRUD onClick={() => alert("В процессе разработки")}>Сортировать</ButtonCRUD>

            {showModal && (
                <ModalCase
                    refresh={refresh}
                    setShowModal={setShowModal}
                    data={{
                        ...data,
                        dateCreate: formatDate(),
                        dateDeadline: formatDateDeadline(),
                    }}
                    typeRequest={"POST"}
                />
            )}
        </div>
    );
};

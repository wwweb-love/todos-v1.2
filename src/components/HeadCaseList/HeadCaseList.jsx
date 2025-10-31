import styles from "./HeadCaseList.module.css";
import { ButtonCRUD } from "../ButtonCRUD/ButtonCRUD";
import {
    formatDate,
    formatDateDeadline,
} from "../../hooks/useGetFormatData/use-get-format-data";
import { ModalCase } from "../ModalCase/ModalCase";
import { use } from "react";
import { ShowModalContext } from "../../context";

export const HeadCaseList = () => {
    const [ showModal, dispatchShowModal ] = use(ShowModalContext)



    let data = {
        title: "",
        description: "",
        dataCreate: "",
        dataDeadline: "",
        completed: false,
    };

    const handleClickAddTodos = () => {
        dispatchShowModal({ type: "SET_SHOW_MODAL_OPEN", payload: true });
    };

    return (
        <div className={styles["head-case"]}>
            <h1>Список дел</h1>
            <ButtonCRUD onClick={handleClickAddTodos}>Добавить</ButtonCRUD>
            <ButtonCRUD onClick={() => alert("В процессе разработки")}>
                Сортировать
            </ButtonCRUD>

            {showModal && (
                <ModalCase
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

import styles from "./ModalCase.module.css";
import { ButtonCRUD } from "../ButtonCRUD/ButtonCRUD";
import { Switch } from "../Switch/Switch";
import { usePostRequest } from "../../hooks/useCRUD/use-request-post";
import { usePutRequest } from "../../hooks/useCRUD/use-request-put";
import { useState } from "react";

export const ModalCase = ({ refresh, setShowModal, data, typeRequest, casePageUrlId }) => {
    const [title, setTitle] = useState(data.title);
    const [description, setDescription] = useState(data.description);
    const [dataCreate, setDataCreate] = useState(data.dateCreate);
    const [dataDeadline, setDataDeadline] = useState(data.dateDeadline);
    const [completed, setCompleted] = useState(data.completed);

    const requestCRUD = () => {

        const dataModal = {
            title: title,
            description: description,
            dataCreate: dataCreate,
            dataDeadline: dataDeadline,
            completed: completed,
        };

        if (typeRequest == "POST") {
            usePostRequest(
                "http://localhost:3033/todos",
                dataModal,
                refresh
            );
        } else if (typeRequest == "PUT") {
            usePutRequest(
                `http://localhost:3033/todos/${casePageUrlId}`,
                dataModal,
                refresh
            )
        }
        


        setShowModal(false);
    };

    const states = [
        [title, setTitle],
        [description, setDescription],
        [dataCreate, setDataCreate],
        [dataDeadline, setDataDeadline],
    ];

    const labels = [
        "Заголовок дела",
        "Описание",
        "Дата создания",
        "Дата крайнего срока",
    ];

    return (
        <div className={styles["modal-wripe"]}>
            <div className={styles.modal}>
                <div>
                    <ButtonCRUD onClick={() => setShowModal(false)}>
                        Закрыть
                    </ButtonCRUD>
                </div>
                {states.map(([state, setState], index) => {
                    return (
                        <div className={styles.blockItem} key={index}>
                            <label>{labels[index]}</label>
                            <input
                                className={styles.inp}
                                value={state}
                                onChange={(e) => setState(e.target.value)}
                            />
                        </div>
                    );
                })}
                <label>Статус дела</label>
                <Switch
                    completed={completed}
                    setCompleted={setCompleted}
                    disabled={null}
                />
                <div>
                    <ButtonCRUD onClick={requestCRUD}>
                        Отправить
                    </ButtonCRUD>
                </div>
            </div>
        </div>
    );
};

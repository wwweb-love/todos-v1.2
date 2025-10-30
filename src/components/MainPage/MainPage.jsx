import { HeadCaseList } from "../HeadCaseList/HeadCaseList";
import { SearchCase } from "../SearchCase/SearchCase";
import { CaseList } from "../CaseList/CaseList";
import styles from "./MainPage.module.css";
import { Outlet } from "react-router-dom";

export const MainPage = ({
    refresh,
    todos,
    loading,
    setIndexCase,
    showModal,
    setShowModal,
}) => {
    return (
        <div className={styles["main-page"]}>
            <HeadCaseList
                refresh={refresh}
                showModal={showModal}
                setShowModal={setShowModal}
                todos={todos}
            />
            <SearchCase />
            <CaseList
                todos={todos}
                loading={loading}
                setIndexCase={setIndexCase}
            />
            <Outlet />
        </div>
    );
};

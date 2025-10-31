import { HeadCaseList } from "../HeadCaseList/HeadCaseList";
import { SearchCase } from "../SearchCase/SearchCase";
import { CaseList } from "../CaseList/CaseList";
import styles from "./MainPage.module.css";
import { Outlet } from "react-router-dom";

export const MainPage = () => {
    return (
        <div className={styles["main-page"]}>
            <HeadCaseList />
            <SearchCase />
            <CaseList />
            <Outlet />
        </div>
    );
};

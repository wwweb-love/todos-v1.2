// Directory
import styles from "./App.module.css";
import { Route, Routes } from "react-router-dom";
import { useState, useReducer } from "react";

// Routes
import { NotFound } from "./components/NotFound/NotFound";

// Component
import { MainPage } from "./components/MainPage/MainPage";
import { CasePage } from "./components/CasePage/CasePage";
import { useGetRequest } from "./hooks/useCRUD/use-request-get";

// Context
import { AppAllContext } from "./use-context-app";

const reducer = (action) => {
    const { type, payload } = action;
    switch (type) {
        case "SET_REFRESH": {
            return !payload;
        }
        case "SET_SHOW_MODAL_OPEN": {
            return true;
        }
        case "SET_SHOW_MODAL_CLOSE": {
            return false;
        }
        default:
            return payload;
    }
};

function App() {
    const [isRefresh, setIsRefresh] = useState(false);
    // const refresh = () => setRefresh(!isRefresh);

    // const [indexCase, setIndexCase] = useState(null);

    const [showModal, setShowModal] = useState(false);

    const dispatchIsRefresh = ({ type, payload }) => {
        const state = reducer({ type, payload });
        setIsRefresh(state)
    };


    const dispatchShowModal = ({ type, payload }) => {
        const state = reducer({ type, payload });
        setShowModal(state)
    };

    return (
        <div className={styles.app}>
            <Routes>
                <Route
                    path="/"
                    element={
                        <AppAllContext
                            refresh={[isRefresh, dispatchIsRefresh]}
                            showModal={[showModal, dispatchShowModal]}
                        >
                            <MainPage />
                        </AppAllContext>
                    }
                ></Route>
                <Route
                    path="/case/:id"
                    element={
                        <AppAllContext
                            refresh={[isRefresh, dispatchIsRefresh]}
                            showModal={[showModal, dispatchShowModal]}
                        >
                            <CasePage />
                        </AppAllContext>
                    }
                ></Route>
                <Route path="*" element={<NotFound />}></Route>
                <Route path="/case/*" element={<NotFound />}></Route>
            </Routes>
        </div>
    );
}

export default App;

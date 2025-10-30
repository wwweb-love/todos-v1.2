// Directory
import styles from "./App.module.css";
import { Route, Routes } from "react-router-dom";
import { useState } from "react";

// Routes
import { NotFound } from "./components/NotFound/NotFound";

// Component
import { MainPage } from "./components/MainPage/MainPage";
import { CasePage } from "./components/CasePage/CasePage";
import { useGetRequest } from "./hooks/useCRUD/use-request-get";

function App() {
    const [isRefresh, setRefresh] = useState(false);
    const refresh = () => setRefresh(!isRefresh);

    const [indexCase, setIndexCase] = useState(null);

    const { todos, loading } = useGetRequest(
        "http://localhost:3033/todos",
        isRefresh
    );

    const [showModal, setShowModal] = useState(false);

    return (
        <div className={styles.app}>
            <Routes>
                <Route
                    path="/"
                    element={
                        <MainPage
                            isRefresh={isRefresh}
                            refresh={refresh}
                            todos={todos}
                            loading={loading}
                            setIndexCase={setIndexCase}
                            showModal={showModal}
                            setShowModal={setShowModal}
                        />
                    }
                ></Route>
                <Route
                    path="/case/:id"
                    element={
                        <CasePage
                            todos={todos}
                            loading={loading}
                            refresh={refresh}
                            indexCase={indexCase}
                            showModal={showModal}
                            setShowModal={setShowModal}
                        />
                    }
                ></Route>
                <Route path="*" element={<NotFound />}></Route>
            </Routes>
        </div>
    );
}

export default App;

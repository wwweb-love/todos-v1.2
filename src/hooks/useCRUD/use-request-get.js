import { useState, useEffect } from "react";

export const useGetRequest = (url, isRefresh) => {
    const [todos, setTodos] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);

        fetch(url)
            .then((rawLoad) => rawLoad.json())
            .then((loaded) => setTodos(loaded))
            .finally(() => setLoading(false));
    }, [isRefresh]);
    return {
        todos,
        loading,
    };
};

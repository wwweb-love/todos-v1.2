
export const usePutRequest = (url, objectData, dispatchRefresh, isRefresh) => {


    fetch(url, {
        method: "PUT",
        headers: { "Content-Type": "application/json;charset=utf-8" },
        body: JSON.stringify(objectData),
    })
        .then((rawData) => rawData.json())
        .then((loaded) => dispatchRefresh({ type: "SET_REFRESH", payload: isRefresh }));
};
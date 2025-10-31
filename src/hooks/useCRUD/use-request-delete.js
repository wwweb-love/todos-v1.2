export const useDeleteRequest = (url, dispatchRefresh, isRefresh) => {
    fetch(url, {
        method: "DELETE"
    })
        .then((rawData) => rawData.json())
        .then((loaded) => dispatchRefresh({type: "SET_REFRESH", payload: isRefresh}));
};
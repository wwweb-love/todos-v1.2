export const useDeleteRequest = (url, refresh) => {
    fetch(url, {
        method: "DELETE"
    })
        .then((rawData) => rawData.json())
        .then((loaded) => refresh());
};
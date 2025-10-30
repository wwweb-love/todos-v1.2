export const usePutRequest = (url, objectData, refresh) => {
    fetch(url, {
        method: "PUT",
        headers: { "Content-Type": "application/json;charset=utf-8" },
        body: JSON.stringify(objectData),
    })
        .then((rawData) => rawData.json())
        .then((loaded) => refresh());
};
export const storeItems = (data) => {
    localStorage.setItem("currentUser", JSON.stringify(data));
}

export const restoreItems =  () => {
    return JSON.parse(localStorage.getItem("currentUser")) || {};
}

export const deleteItems = () => {
    localStorage.removeItem("currentUser");
}
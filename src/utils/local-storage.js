export const storeItems = (data) => {
    if (typeof window !== 'undefined') {
        localStorage.setItem("currentUser", JSON.stringify(data));
    }    
}

export const restoreItems =  () => {
    if (typeof window !== 'undefined') {
        return JSON.parse(localStorage.getItem("currentUser")) || {};
    }
}

export const deleteItems = () => {
    if (typeof window !== 'undefined') {
        localStorage.removeItem("currentUser");
    }
}
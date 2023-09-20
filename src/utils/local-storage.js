export default function storeItems(data) {
    localStorage.setItem("currentUser", JSON.stringify(data));
}

export default function restoreItems() {
    return JSON.parse(localStorage.getItem("currentUser")) || {};
}
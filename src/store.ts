export const storeKey = "ultitodos";

const store = JSON.parse(localStorage.getItem(storeKey));

const data =
  Array.isArray(store) && store.length >= 1
    ? store
    : [{ text: "Example task", completed: false }];

export default data;

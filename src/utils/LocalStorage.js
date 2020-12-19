export const setLocalStorage = (list, id) => {
  window.localStorage.setItem(id, JSON.stringify(list));
};

export const getLocalStorage = id => {
  let localData = window.localStorage.getItem(id);

  return JSON.parse(localData);
};

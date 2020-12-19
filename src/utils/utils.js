export const createElement = ({ tagType, innerText, innerHTML }) => {
  const element = document.createElement(tagType);
  if (innerHTML) element.innerHTML = innerHTML;
  if (innerText) element.innerText = innerText;

  return element;
};

export const clearContainer = (containerArray) => {
  containerArray.map((container) => (container.innerHTML = ""));
};

export const insertRow = (table, type, element1, element2) => {
  if (type === "heading") {
    table.innerHTML += `<tr><th>${element1}</th><th>${element2}</th></tr>`;
  } else if (type === "data") {
    table.innerHTML += `<tr><td>${element1}</td><td>${element2}</td></tr>`;
  }
};

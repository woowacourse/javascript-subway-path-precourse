export const createElement = ({ tagType, innerText, innerHTML }) => {
  const element = document.createElement(tagType);
  if (innerHTML) element.innerHTML = innerHTML;
  if (innerText) element.innerText = innerText;

  return element;
};

export const clearContainer = (containerArray) => {
  containerArray.map((container) => (container.innerHTML = ""));
};

export const insertRow = (table, type, element) => {
  if (type === "heading") {
    table.innerHTML += `<tr><th>${element[0]}</th><th>${element[1]}</th></tr>`;
  } else if (type === "data") {
    table.innerHTML += `<tr><td>${element[0]}</td><td>${element[1]}</td></tr>`;
  } else if (type === "path") {
    table.innerHTML += `<tr><td colspan="2">${element[0]}</td></tr>`;
  }
};
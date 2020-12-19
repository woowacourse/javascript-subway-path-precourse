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
    table.innerHTML += `<tr>${element
      .map((e) => `<th>${e}</th>`)
      .join("")}</tr>`;
  } else if (type === "data") {
    table.innerHTML += `<tr>${element
      .map((e) => `<td>${e}</td>`)
      .join("")}</tr>`;
  } else if (type === "path") {
    table.innerHTML += `<tr><td colspan="2">${element[0]}</td></tr>`;
  }
};

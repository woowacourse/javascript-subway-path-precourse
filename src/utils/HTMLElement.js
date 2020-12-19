export const createHeader = (text, size = 2) => {
  const header = document.createElement(`h${size}`);

  header.innerText = text;

  return header;
};

export const createTable = (names) => {
  const table = document.createElement("table");
  const tr = document.createElement("tr");
  const tHead = document.createElement("thead");
  const tBody = document.createElement("tbody");

  names.forEach((name) => {
    const th = document.createElement("th");
    th.innerText = name;
    tr.appendChild(th);
  });

  tHead.appendChild(tr);
  table.appendChild(tHead);
  table.appendChild(tBody);

  return table;
};

export const createTableRow = (tdArray) => {
  const tr = document.createElement("tr");

  tdArray.forEach((td) => {
    tr.appendChild(td);
  });

  return tr;
};

export const createTableData = (text, colspan = "") => {
  const td = document.createElement("td");

  td.innerText = text;
  td.setAttribute("colspan", colspan);

  return td;
};

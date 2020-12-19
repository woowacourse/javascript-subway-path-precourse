export const visibleToggle = () => {
  const resultContainer = document.querySelector("#result-container");
  resultContainer.style.display === ""
    ? (resultContainer.style.display = "none")
    : (resultContainer.style.display = "");
};

export const printTable = (num, result, stations, takes) => {
  const resultContainer = document.querySelector("#result-container");
  if (!document.querySelector("#result-container-table")) {
    const div = document.createElement("div");
    div.setAttribute("id", "result-container-table");
    resultContainer.append(div);
  }
  addTable(num, result, takes);
};

export const addTable = (num, result, takes) => {
  const tableContainer = document.querySelector("#result-container-table");
  if (num == 0) {
    tableContainer.innerHTML = `<h3>최단거리</h3>`;
  } else {
    tableContainer.innerHTML = `<h3>최소시간</h3>`;
  }
  const table = document.createElement("table");
  table.innerHTML = "";
  table.innerHTML = addTableData(result, takes);
  tableContainer.append(table);
};

export const addTableData = (result, takes) => {
  let row = `<tr><th>총 거리</th><th>최소시간 </th></tr>`;
  row += `<tr><td>${takes[0]}km</td><td>${takes[1]}분 </td></tr>`;
  let routeRow = "";
  result.map((v, index) => {
    routeRow += `${v}`;
    if (index !== result.length - 1) {
      routeRow += " =>";
    }
  });
  row += `<tr ><td  colspan="2">${routeRow} </td></tr>`;
  return row;
};

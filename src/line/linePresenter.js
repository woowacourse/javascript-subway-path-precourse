export const lineListTemplate = lineList => {
  let template = `
      <tr>
        <th>노선 이름</th>
        <th>상행 종점역</th>
        <th>하행 종점역</th>
      </tr>
  `;
  for (const line of lineList) {
    template += `
      <tr data-lineName="${line[0]}">
        <td>${line[0]}</td>
        <td>${line[1]}</td>
        <td>${line[line.length - 1]}</td>
      </tr>
    `;
  }
  lineListPresenter(template);
};

export const lineListPresenter = template => {
  const lineNameTable = document.querySelector("#line-name-table");
  lineNameTable.innerHTML = template;
};

export const clearOption = () => {
  const lineOptions = document.querySelectorAll("#station-option");
  for (const option of lineOptions) {
    option.remove();
  }
};

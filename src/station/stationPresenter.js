export const stationListTemplate = stationList => {
  let template = `
      <tr>
        <th>역 이름</th>
      </tr>
  `;
  for (const station of stationList) {
    template += `
      <tr data-stationName="${station}">
        <td>${station}</td>
      </tr>
    `;
  }
  stationListPresenter(template);
};

export const stationListPresenter = template => {
  const stationNameTable = document.querySelector("#station-name-table");
  stationNameTable.innerHTML = template;
};

export const lineMenuPresenter = lineData => {
  const lineMenuContainer = document.querySelector("#line-menu-container");
  let lineMenu = "";
  for (const line of lineData) {
    lineMenu += `
      <button data-lineNumber=${line[0]} id="line-menu-button">${line[0]}</button>
    `;
  }
  lineMenuContainer.innerHTML = lineMenu;
};

export const sectionManagePresenter = (lineData, stationData) => {
  const sectionManageContainer = document.querySelector(
    "#section-manage-container",
  );
  let sectionManageTemplate = `
    <h3>${lineData[0]} 관리</h3>
    <h4>구간 등록</h4>
    `;
  sectionManageTemplate += stationSelector(stationData);
  sectionManageTemplate += `
    <input id="section-manage-input" placeholder="순서" type="number"/>
    <button id="section-manage-button">등록</button>
    <br />
    <br />
    <br />
  `;
  sectionManageContainer.innerHTML = sectionManageTemplate;
};

const stationSelector = stationData => {
  let selectTemplate = `<select id="section-manage-selector">`;
  if (stationData) {
    for (const station of stationData) {
      selectTemplate += `<option>${station}</option>`;
    }
  }
  selectTemplate += `</select>`;
  return selectTemplate;
};

export const lineListTemplate = line => {
  let template = `
      <tr>
        <th>순서</th>
        <th>이름</th>
      </tr>
  `;
  for (let i = 1; i < line.length; i++) {
    template += `
        <tr data-lineName="${line[i]}">
          <td><center>${i - 1}</center></td>
          <td>${line[i]}</td>
        </tr>
      `;
  }
  lineListPresenter(template);
};

export const lineListPresenter = template => {
  const sectionManageContainer = document.querySelector(
    "#section-manage-container",
  );
  const lineListTable = document.createElement("table");
  lineListTable.setAttribute("id", "line-list-table");
  lineListTable.innerHTML = template;
  sectionManageContainer.appendChild(lineListTable);
};

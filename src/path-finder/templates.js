const RESULT_HEADER = `
<h2>📝 결과</h2>
`;

const RESULT_TABLE = `
<table id="result-table">
</table>
`;
const RESULT_TABLE_HEADER = `
<tr>
  <th>총 거리</th>
  <th>총 소요 시간</th>
</tr>
`;

const getResultType = (_type) => {
  return `<h3>${_type}</h3>`;
};

const getResultTable = (_diatance, _time, _sections) => {
  const resultTable = document.getElementById("result-table");
  resultTable.innerHTML += RESULT_TABLE_HEADER;
  resultTable.innerHTML += `<tr><td>${_diatance}km</td><td>${_time}분</td></tr>`;
  resultTable.innerHTML += `<tr><td colspan="2">${_sections.join(
    "→"
  )}</td></tr>`;
};

export const printLayout = (_type, _diatance, _time, _sections) => {
  const resultContainer = document.getElementById("result-container");

  resultContainer.innerHTML =
    RESULT_HEADER + getResultType(_type) + RESULT_TABLE;

  getResultTable(_diatance, _time, _sections);
};

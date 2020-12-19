const clearTable = () => {
  const container = document.getElementById("path-result-container");
  container.innerHTML = "";
};

const getPathString = () => ``;

const tableDom = (distance, time) => `
<h1>📝 결과</h1>
<table id="section-list-table">
  <tr>
    <th><b>총 거리</b></th>
    <th><b>총 소요시간</b></th>
  </tr>
  <tr>
    <td id="total-distance">${distance}km</td>
    <td id="total-time">${time}분</td>
  </tr>
  <tr>
    <td id="total-path">${getPathString()}</td>
  </tr>
</table>`;

export const setResultTable = (distance, time) => {
  clearTable();
  console.log(distance, time);
  const container = document.getElementById("path-result-container");
  const div = document.createElement("div");
  div.innerHTML = tableDom(distance, time);
  container.appendChild(div);
};

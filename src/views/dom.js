const tableDom = (distance, time, path) => `
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
    <td colspan="2" id="total-path">${path.join("➡")}</td>
  </tr>
</table>`;

export const clearTable = () => {
  const container = document.getElementById("path-result-container");

  container.innerHTML = "";
};

export const clearInputArea = () => {
  document.getElementById("departure-station-name-input").value = "";
  document.getElementById("arrival-station-name-input").value = "";
};

export const setResultTable = (distance, time, path) => {
  clearTable();
  const container = document.getElementById("path-result-container");
  const div = document.createElement("div");

  div.innerHTML = tableDom(distance, time, path);
  container.appendChild(div);
};

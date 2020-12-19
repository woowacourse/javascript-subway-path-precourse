function resultContainerTemplate(information, result) {
  return `<h2>📑결과<h3>
              <h3>${information}<h3>
              <table id="result-table" border="1" style="text-align: center" >
                <tr>
                  <th>총 거리</th>
                  <th>총 소요 시간</th>
                </tr>
              </table>`;
}

function initResultContainer(information) {
  const resultContainer = document.getElementById("result-container");
  resultContainer.innerHTML = resultContainerTemplate(information);
}

function resultListTemplate(shortestPath, totalDistance, totalTime) {
  return `<tr>
              <td>
                ${totalDistance}Km
              </td>
              <td>
                ${totalTime}분
              </td>
            </tr>
            <tr>
              <td colspan="2">
              ${shortestPath
                .map((station, i) => (i !== shortestPath.length - 1 ? station + "=>" : station))
                .join("")}
              </td>
            </tr>`;
}

function initResultList(shortestPath, totalDistance, totalTime) {
  const resultTable = document.getElementById("result-table");
  resultTable.insertAdjacentHTML(
    "beforeend",
    resultListTemplate(shortestPath, totalDistance, totalTime)
  );
}

export default function RoadResult(information, shortestPath, totalDistance, totalTime) {
  initResultContainer(information);
  initResultList(shortestPath, totalDistance, totalTime);
}

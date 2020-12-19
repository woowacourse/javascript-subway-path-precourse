function resultContainerTemplate(information) {
  return `<h2>📑결과<h3>
              <h3>${information}<h3>
              <table id="map-result-table" border="1">
                <tr>
                  <th>총 거리</th>
                  <th>총 소요 시간</th>
                </tr>
              </table>`;
}

function initResultContainer(information) {
  const resultContainer = document.getElementById("map-result-container");
  resultContainer.innerHTML = resultContainerTemplate(information);
}

export default function RoadResult(information) {
  initResultContainer(information);
}

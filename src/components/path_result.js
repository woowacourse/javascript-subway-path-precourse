export default function PathResult() {
  this.pathResultContainer = document.querySelector('.path-result-container');

  this.template = (distance, time, path) => {
    return `
      <h2>📝결과</h2>
      <h3>최단거리</h3>
      <table>
        <tr>
          <th>총 거리</th>
          <th>총 소요 시간</th>
        </tr>
        ${this.distanceAndTimeTemplate(distance, time)}
        ${this.pathTemplate(path)}
      </table>
    `;
  };

  this.distanceAndTimeTemplate = (distance, time) => {
    return `<tr>
      <td>${distance}km</td>
      <td>${time}분</td>
    </tr>`;
  };

  this.pathTemplate = path => {
    return `<tr>
      <td>${path}</td>
    </tr>`;
  };

  this.render = () => {
    this.pathResultContainer.innerHTML = this.template();
  };
}

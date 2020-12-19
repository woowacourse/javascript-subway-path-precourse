import View from './View.js';
import { UNIT } from '../utils/constants.js';

export default class SearchPathInputFormView extends View {
  setup($element) {
    this.init($element);
    return this;
  }

  renderSearchPathResult(path, totalDistance, totalTime, searchType) {
    this.$element.innerHTML = this.getSearchPathResultHTML(
      path,
      totalDistance,
      totalTime,
      searchType
    );
    return this;
  }

  getSearchPathResultHTML(path, totalDistance, totalTime, searchType) {
    return `<h2>📝 결과</h2>
      <table border="1">
        <caption id="path-result-title">${searchType}</caption>
        <thead>
          <tr>
            <th>총 거리</th>
            <th>총 소요시간</th>
          </tr>
        </thead>
        <tbody class="station_manager_tbody">
          <tr>
            <td>${totalDistance}${UNIT.DISTANCE}</td>
            <td>${totalTime}${UNIT.TIME}</td>
          </tr>
          <tr>
            <td colspan="2">${this.getPathHTML(path)}</td>
          </tr>
        </tbody>
      </table>
    </div>`;
  }

  getPathHTML(path) {
    return `${path.join('👉🏻')}`;
  }
}

import View from './View.js';
import { UNIT } from '../utils/constants.js';

const tag = `[SearchPathInputFormView]`;
export default class SearchPathInputFormView extends View {
  setup($element) {
    console.log(`${tag} init`);
    this.init($element);
    return this;
  }

  renderSearchPathResult(searchType) {
    console.log(`${tag} renderSearchInputForm`);
    this.$element.innerHTML = this.getSearchPathResultHTML(searchType);
    return this;
  }

  getSearchPathResultHTML(searchType) {
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
            <td>0${UNIT.DISTANCE}</td>
            <td>0${UNIT.TIME}</td>
          </tr>
          <tr>
            <td colspan="2">최종거리를 입력하는 곳입니다.</td>
          </tr>
        </tbody>
      </table>
    </div>`;
  }
}

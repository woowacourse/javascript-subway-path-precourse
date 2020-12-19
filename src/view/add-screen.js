import {$resultWrapper} from './element.js';
import {
  TIME,
  DISTANCE,
  RESULT_TEXT,
  TH_DISTANCE,
  TH_TIME,
} from '../constant/constant.js';

export const renderResultScreen = (text, {result, total}) => {
  renderResultWrapper(text);
  const $table = document.createElement('table');
  $table.innerHTML = tableContainer;
  $table.querySelector('tbody').innerHTML += `
    <tr>
      <td>${total.distance}${DISTANCE}</td>
      <td>${total.time}${TIME}</td>
    </tr>
    <tr>
      <td colspan="2">${result.join(' -> ')}</td>
    </tr>
  `;
  $resultWrapper.appendChild($table);
};

const renderResultWrapper = (text) => {
  const $title = document.createElement('h1');
  const $resultText = document.createElement('h3');

  $title.textContent = RESULT_TEXT;
  $resultText.textContent = text;

  $resultWrapper.appendChild($title);
  $resultWrapper.appendChild($resultText);
};

const tableContainer = `
<tbody>
  <tr>
    <th>${TH_DISTANCE}</th>
    <th>${TH_TIME}</th>
  </tr>
</tbody>
`;

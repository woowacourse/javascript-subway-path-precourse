import {$resultWrapper} from './element.js';

export const renderResultScreen = (text, result) => {
  renderResultWrapper(text);
  const $table = document.createElement('table');
  $table.innerHTML = tableContainer;
  $table.querySelector('tbody').innerHTML += `
    <tr>
      <td>5km</td>
      <td>5분</td>
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

  $title.textContent = '📑결과';
  $resultText.textContent = text;

  $resultWrapper.appendChild($title);
  $resultWrapper.appendChild($resultText);
};

const tableContainer = `
<tbody>
  <tr>
    <th>총 거리</th>
    <th>총 소요 시간</th>
  </tr>
</tbody>
`;

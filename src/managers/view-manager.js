import { requestToFindShortestPath } from './path-search-manager.js';
import {
  appendNew,
  appendNewRadioButton,
  emptyElement,
} from '../utils/util-ui.js';

export const appendView = () => {
  const appDiv = document.getElementById('app');

  appendNew('h2', appDiv, '🚇 지하철 길찾기');
  appendNew('div', appDiv, '', 'container');
  appendContainer();
};

export const appendContainer = () => {
  const container = document.getElementById('container');
  let searchButton;

  emptyElement(container);
  appendStationNameInputs(container);
  appendRadioButtons(container);
  setDefaultOption('distance');
  searchButton = appendNew('button', container, '길 찾기', 'search-button');
  searchButton.addEventListener('click', (e) => requestToFindShortestPath(e));
};

const appendStationNameInputs = (container) => {
  appendNew('label', container, '출발역');
  appendNew('input', container, '', 'departure-station-name-input').focus();
  appendNew('br', container);
  appendNew('label', container, '도착역');
  appendNew('input', container, '', 'arrival-station-name-input');
  appendNew('br', container);
};

const appendRadioButtons = (container) => {
  const form = appendNew('form', container);

  appendNewRadioButton(form, '최단거리', 'distance', 'search-type');
  appendNewRadioButton(form, '최소시간', 'time', 'search-type');
};

const setDefaultOption = (option) => {
  document.getElementById(option).checked = true;
};

export const appendSearchResult = (path, distance, time) => {
  const container = document.getElementById('container');
  const resultDiv = appendNew('div', container, '', 'search-result');

  appendNew('h3', resultDiv, '📝 결과');
  appendNew('h4', resultDiv, '최단거리');
  appendNew('div', resultDiv, getResultTableHTML(path, distance, time));
};

const getResultTableHTML = (path, distance, time) => {
  return `
  <table border="1">
    <th style="text-align:center">총 거리</th>
    <th style="text-align:center">총 소요시간</th>
    ${getTotalRowHTML(distance, time)}
    ${getPathRowHTML(path)}
  </table>
`;
};

const getTotalRowHTML = (distance, time) => {
  return `<tr>
          <td style="text-align:center">${distance}km</td>
          <td style="text-align:center">${time}분</td>
        </tr>`;
};

const getPathRowHTML = (path) => {
  return `<tr>
          <td colspan="2" style="text-align:center">
            ${path.join().replace(/,/g, '➡')}
          </td>
        </tr>`;
};

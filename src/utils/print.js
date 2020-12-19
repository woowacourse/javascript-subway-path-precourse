import { TEXT } from '../constants.js';

export const printResult = (result, stations) => {
  clearResult();
  const app = document.getElementById('app');
  const resultTitle = document.createElement('h2');
  resultTitle.innerHTML = TEXT.RESULT_TITLE;

  const table = document.createElement('table');
  table.setAttribute('border', 1);
  table.style.textAlign = 'center';

  createTableHeader(table);
  createTableData(table, result, stations);

  app.append(resultTitle, table);
};

const createTableHeader = table => {
  const headerDist = document.createElement('th');
  headerDist.innerHTML = TEXT.T_HEAD_DIST;
  const headerTime = document.createElement('th');
  headerTime.innerHTML = TEXT.T_HEAD_TIME;
  table.append(headerDist, headerTime);
};

const createTableData = (table, result, stations) => {
  let [totalDist, totalTime] = getDistTime(result, stations);

  const tableRow = document.createElement('tr');
  const distData = document.createElement('td');
  const timeData = document.createElement('td');
  distData.innerHTML = totalDist + TEXT.UNIT_DIST;
  timeData.innerHTML = totalTime + TEXT.UNIT_TIME;
  tableRow.append(distData, timeData);

  const routeData = getRoute(result);
  table.append(tableRow, routeData);
};

const getDistTime = (result, stations) => {
  let totalDist = 0;
  let totalTime = 0;

  for (let i = 0; i < result.length - 1; i++) {
    let curr = result[i];
    let next = result[i + 1];
    let currStation = stations.find(station => station.name === curr);
    let dist = currStation.sections[next][0];
    let time = currStation.sections[next][1];
    totalDist += dist;
    totalTime += time;
  }

  return [totalDist, totalTime];
};

const getRoute = result => {
  const routeData = document.createElement('td');
  routeData.setAttribute('colspan', 2);
  for (let i = 0; i < result.length; i++) {
    routeData.innerHTML += result[i];
    if (i < result.length - 1) {
      routeData.innerHTML += '➡️';
    }
  }

  return routeData;
};

const clearResult = () => {
  const title = document.querySelector('h2');
  const table = document.querySelector('table');
  if (title && table) {
    title.remove();
    table.remove();
  }
};

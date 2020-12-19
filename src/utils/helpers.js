import Dijkstra from './Dijkstra.js';

export const makeDijkstra = (type, stations) => {
  const dijkstra = new Dijkstra();
  stations.map(station => dijkstra.addVertex(station.name));

  for (let station of stations) {
    for (let [key, value] of Object.entries(station.sections)) {
      if (type === 'dist') {
        dijkstra.addEdge(station.name, key, value[0]);
      } else if (type === 'time') {
        dijkstra.addEdge(station.name, key, value[1]);
      }
    }
  }

  return dijkstra;
};

export const printResult = (result, stations) => {
  clearResult();
  const app = document.getElementById('app');
  const resultTitle = document.createElement('h2');
  resultTitle.innerHTML = '📝 결과';

  const table = document.createElement('table');
  table.setAttribute('border', 1);
  table.style.textAlign = 'center';

  createTableHeader(table);
  createTableData(table, result, stations);

  app.append(resultTitle, table);
};

const createTableHeader = table => {
  const headerDist = document.createElement('th');
  headerDist.innerHTML = '총 거리';
  const headerTime = document.createElement('th');
  headerTime.innerHTML = '총 소요 시간';
  table.append(headerDist, headerTime);
};

const createTableData = (table, result, stations) => {
  let [totalDist, totalTime] = getDistTime(result, stations);

  const tableRow = document.createElement('tr');
  const distData = document.createElement('td');
  const timeData = document.createElement('td');
  distData.innerHTML = totalDist + 'km';
  timeData.innerHTML = totalTime + '분';
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

export const validateInput = (depart, arrive, stations) => {
  if (depart.length < 2 || arrive.length < 2) {
    return alertMessage('역 이름을 2자 이상으로 입력해주세요.');
  } else if (
    !stations.find(station => station.name === depart) ||
    !stations.find(station => station.name === arrive)
  ) {
    return alertMessage('입력하신 역이 존재하지 않습니다.');
  } else if (depart === arrive) {
    return alertMessage('출발역과 도착역이 같습니다.');
  }
  return true;
};

const alertMessage = msg => {
  alert(msg);
  return false;
};

export const alertNoRoute = () => {
  alert('해당하는 경로가 존재하지 않습니다.');
  return;
};

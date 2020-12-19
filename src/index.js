import SubwayPath from './subway_path.js';

const departureStationNameInput = document.getElementById('departure-station-name-input');
const arrivalStationNameInput = document.getElementById('arrival-station-name-input');
const searchButton = document.getElementById('search-button');
const resultDiv = document.getElementById('result-div');
const titleH3 = document.getElementById('title-h3');
const totalDistanceTd = document.getElementById('total-distance-td');
const totalTimeTd = document.getElementById('total-time-td');
const stepTd = document.getElementById('step-td');

const subwayPath = new SubwayPath();

searchButton.addEventListener('click', clickSearchButton);

function clickSearchButton() {
  "use strict";

  const departureStation = departureStationNameInput.value;
  const arrivalStation = arrivalStationNameInput.value;
  const radio = document.querySelector('input[name="search-type"]:checked');
  resultDiv.classList.add('d-none');
  if (!checkStation(departureStation, arrivalStation)) {
    return;
  }
  titleH3.textContent = radio.labels[0].textContent;
  const path = findShortestDistancePath(departureStation, arrivalStation, radio.value);
  showResult(path);
}

function checkStation(departureStation, arrivalStation) {
  "use strict";

  if (departureStation.length < 2 || arrivalStation.length < 2) {
    alert('역 이름은 2글자 이상이어야 합니다.');
    return false;
  } else if (!(subwayPath.includeStation(departureStation) && subwayPath.includeStation(arrivalStation))) {
    alert('존재하지 않는 역입니다.');
    return false;
  } else if (departureStation === arrivalStation) {
    alert('출발역과 도착역이 같을 수 없습니다.');
    return false;
  }
  return true;
}

function findShortestDistancePath(source, target, type) {
  "use strict";

  let path = null;
  switch (type) {
    case 'distance':
      path = subwayPath.findShortestDistancePath(source, target);
      break;
    case 'time':
      path = subwayPath.findShortestTimePath(source, target);
      break;
  }
  return path;
}

function showResult(path) {
  "use strict";

  const totalDistanceAndTime = subwayPath.getTotalDistanceAndTime(path);
  totalDistanceTd.textContent = `${totalDistanceAndTime.distance}km`;
  totalTimeTd.textContent = `${totalDistanceAndTime.time}분`;
  stepTd.textContent = path.join('→');
  resultDiv.classList.remove('d-none');
}

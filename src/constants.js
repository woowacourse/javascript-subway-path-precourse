export const SEARCH = {
  BUTTON: document.getElementById('search-button'),
  TYPE: document.getElementsByName('search-type'),
};

export const INPUT = {
  DEPARTURE: document.getElementById('departure-station-name-input'),
  ARRIVAL: document.getElementById('arrival-station-name-input'),
};

export const SEARCH_TYPE = {
  PATH: '최단거리',
  TIME: '최소시간',
};

export const RESULT = {
  DISPLAY: document.getElementById('result'),
  TYPE: document.getElementById('result-type'),
  DISTANCE: document.getElementById('total-distance'),
  TIME: document.getElementById('total-time'),
  PATH: document.getElementById('result-path'),
};

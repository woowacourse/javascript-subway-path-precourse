const renderResultTable = () => {
  const $resultContainer = document.querySelector('#result-container');
  $resultContainer.removeAttribute('hidden');
};

const renderRouteTable = (route) => {
  const $routeTable = document.querySelector('#route-table');
  $routeTable.innerHTML = route;
};

const renderDistanceTable = (distance) => {
  const $distanceTable = document.querySelector('#distance-table');
  $distanceTable.innerHTML = `${distance}km`;
};

const renderTimeTable = (time) => {
  const $timeTable = document.querySelector('#time-table');
  $timeTable.innerHTML = `${time}분`;
};

export const render = (route, distance, time) => {
  if (route === undefined) {
    return alert('연결되지 않은 역은 입력할 수 없습니다.');
  }
  renderResultTable();
  renderRouteTable(route.join(' ➡'));
  renderDistanceTable(distance);
  renderTimeTable(time);
};

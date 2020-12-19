export const getDepartureStationName = () => {
  const $inputDeapartureStationName = document.querySelector("#departure-station-name-input");
  return $inputDeapartureStationName.value;
};

export const getArrivalStationName = () => {
  const $inputArrivalStationName = document.querySelector("#arrival-station-name-input");
  return $inputArrivalStationName.value;
};

export const getSearchType = () => {
  const $inputSearchType = document.querySelector('input[name="search-type"]:checked');
  return $inputSearchType.value;
};

export const setBtnGetDirection = (func) => {
  const $btnGetDirection = document.querySelector("#get-direction");
  $btnGetDirection.addEventListener("click", (e) => func(e));
};

export const createHeader = (tagName, innerText) => {
  const $header = document.createElement(tagName);
  $header.innerText = innerText;
  return $header;
};

export const createTable = (distance, time, route) => {
  const $table = document.createElement("table");
  $table.innerHTML = `
      <tr>
        <th>총 거리</th>
        <th>총 소요시간</th>
      </tr>
      <tr>
        <td>${distance}KM</td>
        <td>${time}분</td>
      </tr>
      <tr>
        <td colspan="2">${route}</td>
      </tr>
    `;
  return $table;
};

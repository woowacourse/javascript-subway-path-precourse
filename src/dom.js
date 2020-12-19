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

export const createTableHeader = () => {
  const $h3TableHeader = document.createElement("h1");
  $h3TableHeader.innerText = `📝결과`;
  return $h3TableHeader;
};

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

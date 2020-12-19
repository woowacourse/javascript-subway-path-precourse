export const getDepartureStationName = () => {
  const $inputDeapartureStationName = document.querySelector("#departure-station-name-input");
  return $inputDeapartureStationName.value;
};

export const getArrivalStationName = () => {
  const $inputArrivalStationName = document.querySelector("#arrival-station-name-input");
  return $inputArrivalStationName.value;
};

export const isValidInput = (departureStationName, arrivalStationName) => {
  return departureStationName.length >= 2 && arrivalStationName.length >= 2;
};

export const isRegistredStation = (
  departureStationName,
  arrivalStationName,
  stations
) => {
  const allStationsName = stations.map(({ name }) => name);
  return (
    allStationsName.includes(departureStationName) &&
    allStationsName.includes(arrivalStationName)
  );
};

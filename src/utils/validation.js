export const isValidInput = (departureStationName, arrivalStationName) => {
  return departureStationName.lenght >= 2 && arrivalStationName.lenght >= 2;
};

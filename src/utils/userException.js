export const isValidNameLength = (input) => {
  return input.length >= 2;
};

export const isNameInStations = (stations, input) => {
  return stations.some((station) => station === input);
};

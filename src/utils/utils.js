export const hasDuplicatedName = (stationList, stationName) =>
  stationList.includes(stationName);

const isLengthMoreOne = stationName => stationName.length > 1;

export const isValidStationName = (stationList, stationName) => {
  return (
    !hasDuplicatedName(stationList, stationName) && isLengthMoreOne(stationName)
  );
};

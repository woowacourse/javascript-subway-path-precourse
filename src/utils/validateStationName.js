export {
  isMoreThanTwoWords,
  existStationName,
  isDiffrentStationName,
  haveSpaceInName,
};

function isMoreThanTwoWords(stationName) {
  return stationName.length >= 2;
}

function existStationName(stationName) {
  return stationNameArray.includes(stationName);
}

function isDiffrentStationName(startStation, endStation) {
  return startStation !== endStation;
}

function haveSpaceInName(stationName) {
  return !stationName.split("").includes("");
}

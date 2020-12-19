export const VERTICES = [
  {
    STATION_NAME: "교대"
  }

];


function makeVertex(stationName, lineName) {
  return {
    STATION_NAME: stationName,
    LINE_NAME: lineName,
  }
}
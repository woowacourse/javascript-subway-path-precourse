import {stationList} from "./data.js"

export function validStationNameLength(name) {
  return name.length > 1
}

export function notExistStation(station) {
  return stationList.includes(station)
}

export function sameStation(departure, arrival) {
  return (departure === arrival)
}

// function connected(departure, arrival) {
//   // TODO: 출발역과 도착역이 연결되었는지 확인하는 로직 -> Dijkstra?
//   return
// }
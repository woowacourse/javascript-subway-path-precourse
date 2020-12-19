import { initalLineData, initalStationData } from '../../data/data.js';

export default class SubwayMap {
  #allLines;
  #allStations;
  #pathInfo = { totalDistance: 0, totalTime: 0 };
  #path;  constructor() {
    this.#allStations = initalStationData;
    this.#allLines = initalLineData;
  }

  get allLines() {
    return this.#allLines;
  }

  get allStations() {
    return this.#allStations;
  }

  setPath(path) {
    this.#path = path;
  }

  getTotalDistanceAndTimeFromPath() {
    this.#pathInfo.totalDistance = 0;
    this.#pathInfo.totalTime = 0;
    const initialIndex = 0;
    const initialDistance = 0;
    const initialTime = 0;

    this.#traverseSubwayMap(initialIndex, initialDistance, initialTime);
    return this.#pathInfo;
  }

  // 첫번째 노드를 바탕으로 역들을 순회
  // 순회하다가 발견하면 연결된 노드들 중에 index + 1에 해당하는 값이 있는지 확인
  // 있다면 info 를 더함

  #traverseSubwayMap(index, distance, time) {
    if (index >= this.#path.length - 1) {
      this.#pathInfo.totalDistance = distance;
      this.#pathInfo.totalTime = time;
    }
    const stationName = this.#path[index];
    const newIndex = index + 1;
    let addedDistance = distance;
    let addedTime = time;

    const station = this.#allStations[stationName];
    station.connected.forEach((connectedStation) => {
      const nextPathStation = this.#path[newIndex];
      if (connectedStation.station === nextPathStation) {
        addedDistance += connectedStation.distance;
        addedTime += connectedStation.time;
        this.#traverseSubwayMap(newIndex, addedDistance, addedTime);
      }
    });
  }

  isStationNotExist(stationName) {
    let isExist = true;
    const allLineNames = Object.keys(this.#allLines);
    allLineNames.forEach((lineName) => {
      const line = this.#allLines[lineName];
      line.forEach((section) => {
        if (section.station === stationName) {
          isExist = false;
        }
      });
    });

    return isExist;
  }

  isStationsConnected(fromStationName, toStationName) {
    let isConnected = false;
    const allLineNames = Object.keys(this.#allLines);
    allLineNames.forEach((lineName) => {
      const line = this.#allLines[lineName];
      const fileterdLine = line.filter(
        (section) => section.station === fromStationName || toStationName
      );
      if (fileterdLine.length === 2) {
        isConnected = true;
      }
    });

    return isConnected;
  }
}

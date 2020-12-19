import SubwayStation from './subway_station.js';
import SubwayLine from './subway_line.js';

export default class SubwayMap {
  constructor() {
    this.stationList = [];
    this.lineList = [];
  }

  // 지하철 역 조회
  getStationList() {
    return this.stationList.map(element => element.name);
  }

  // 지하철 역 등록
  addStation(name) {
    if (name.length < 2 || this.stationList.find(element => element.name === name) !== undefined) {
      return false;
    }
    const station = new SubwayStation(name);
    this.stationList.push(station);
    return true;
  }

  // 지하철 역 삭제
  delStation(name) {
    const index = this.stationList.findIndex(element => element.name === name);
    if (index === -1 || this.stationList[index].semaphore !== 0) {
      return false;
    }
    this.stationList.splice(index, 1);
    return true;
  }

  // 지하철 노선 조회
  getLineList() {
    return this.lineList.map(element => [element.name, element.getSection()]);
  }

  // 지하철 노선 등록
  addLine(name, startStationName, endStationName) {
    if (name.length <= 0 || this.lineList.find(element => element.name === name) !== undefined) {
      return false;
    }
    if (startStationName === endStationName) {
      return false;
    }
    const startStation = this.stationList.find(element => element.name === startStationName);
    const endStation = this.stationList.find(element => element.name === endStationName);
    startStation.semaphore++;
    endStation.semaphore++;
    const line = new SubwayLine(name, startStation, endStation);
    this.lineList.push(line);
    return true;
  }

  // 지하철 노선 삭제
  delLine(name) {
    const index = this.lineList.findIndex(element => element.name === name);
    if (index === -1) {
      return false;
    }
    const stationList = this.lineList[index].section;
    for (const station of stationList) {
      station.semaphore--;
    }
    this.lineList.splice(index, 1);
    return true;
  }

  // 지하철 노선 구간 조회
  getSection(lineName) {
    const line = this.lineList.find(element => element.name === lineName);
    return line.getSection();
  }

  // 지하철 구간 등록
  addSection(lineName, stationName, index) {
    const line = this.lineList.find(element => element.name === lineName);
    const station = this.stationList.find(element => element.name === stationName);
    if (index === undefined) {
      return line.addStation(station);
    } else {
      return line.addStation(station, index);
    }
  }

  // 지하철 구간 제거
  delSection(lineName, index) {
    const line = this.lineList.find(element => element.name === lineName);
    return line.delStation(index);
  }

  // 데이터 직렬화
  serialize() {
    const data = {
      station: this.getStationList(),
      line: this.getLineList()
    };
    return JSON.stringify(data);
  }

  // 데이터 역직렬화
  deserialize(json) {
    const data = JSON.parse(json);
    this.stationList = [];
    this.lineList = [];
    for (const station of data.station) {
      this.addStation(station);
    }
    for (const line of data.line) {
      const endIndex = line[1].length - 1;
      this.addLine(line[0], line[1][0], line[1][endIndex]);
      for (let i = 1; i < endIndex; i++) {
        this.addSection(line[0], line[1][i]);
      }
    }
  }
}

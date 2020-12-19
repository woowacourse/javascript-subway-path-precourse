export default class SubwayLine {
  constructor(name, startStation, endStation) {
    this.name = name;
    this.section = [startStation, endStation];
  }

  // 노선에 역 추가. index를 지정하지 않으면 하행 종점 앞에 추가됨
  addStation(station, index = -1) {
    if (this.section.find(element => element.name === station.name) !== undefined) {
      return false;
    }
    station.semaphore++;
    this.section.splice(index, 0, station);
    return true;
  }

  // 노선에서 역 제거
  delStation(index) {
    if (this.section.length <= 2) {
      return false;
    }
    this.section[index].semaphore--;
    this.section.splice(index, 1);
    return true;
  }

  // 구간 조회
  getSection() {
    return this.section.map(element => element.name);
  }
}

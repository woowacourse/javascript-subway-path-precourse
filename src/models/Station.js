export default class Station {
  constructor(name) {
    this.name = name;
    this.sections = {};
  }

  addSection(station, dist, time) {
    this.sections[station] = [dist, time];
  }

  getSection(station) {
    return this.sections[station];
  }
}

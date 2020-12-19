export default class Line {
  constructor({ lineName, stationsOfLine = [] }) {
    this.lineName = lineName;
    this.stationsOfLine = stationsOfLine;
  }
}

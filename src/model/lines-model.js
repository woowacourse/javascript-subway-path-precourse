import Line from "./object/line.js";

export default class LinesModel {
  constructor(initialInput) {
    this.lines = [];
    this.parseInitialInput(initialInput);
    console.log(this.lines);
  }
  parseInitialInput(lines) {
    lines.forEach((line) => {
      this.lines.push(
        new Line({
          lineName: line.lineName,
          stationsOfLine: line.stationsOfLine,
        })
      );
    });
  }
  hasStationName(name) {
    return this.lines.some((line) => {
      return this.hasStationNameInLine(line, name);
    });
  }
  hasStationNameInLine(line, name) {
    return line.stationsOfLine.some((stationName) => {
      return stationName === name;
    });
  }
}

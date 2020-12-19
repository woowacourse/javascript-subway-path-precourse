export default class Station {
  constructor(id, name) {
    this.id = id;
    this.name = name;
    this.lineNumber = [];
  }

  setLine(lineNumber) {
    this.lineNumber.push(lineNumber);
  }
}

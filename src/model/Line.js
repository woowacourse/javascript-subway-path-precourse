/* eslint-disable require-jsdoc */
export class Line {
  constructor(name, stations) {
    this.name = name;
    this.stations = stations;
  }
}

export const LineModel = {
  lines: [],

  list() {
    return this.lines;
  },

  add(object) {
    this.list().push(object);
  },
};

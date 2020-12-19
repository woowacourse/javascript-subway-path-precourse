/* eslint-disable require-jsdoc */
export class Line {
  constructor(name, stations) {
    this.name = name;
    this.stations = stations;
  }
}

export const LineModel = {
  lines: [],
  allStations: [],

  list() {
    return this.lines;
  },

  // listAllStations() {
  //   return this.allStations;
  // },

  listAllStationsSet() {
    const allStations = this.list()
      .map(({ stations }) => stations)
      .flat();

    return new Set(allStations);
  },

  add(object) {
    this.list().push(object);
  },
};

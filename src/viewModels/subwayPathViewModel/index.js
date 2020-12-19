export default class SubwayPathViewModel {
  constructor(model) {
    this.model = model;
  }

  searchPath(startStation, endStation, how) {
    if (how === 'searchShortestPath') {
      return this.model.findShortestPath(startStation, endStation);
    }

    if (how === 'searchMinumumTimePath') {
      return this.model.findMinimumTimePath(startStation, endStation);
    }
  }
}

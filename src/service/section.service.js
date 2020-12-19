import { lines } from "../data/line.js";
import Dijkstra from "../utils/Dijkstra.js";

export default class SectionService {
  constructor() {
    this.lines = lines;
    this.paths = [];
  }

  findAllSections() {
    const sections = [];
    for (let line of lines) {
      sections.push(...line.sections);
    }
    return sections;
  }

  findPath(departureStation, arrivalStation, paths) {
    const sections = this.findSectionsByDepartureStation(departureStation);

    for (let section of sections) {
      //base contidition
      if (section.arrivalStation === arrivalStation) {
        paths.push(section);
        this.paths.push(paths);
        return paths;
      }
      const newPaths = [...paths];
      newPaths.push(section);
      this.findPath(section.arrivalStation, arrivalStation, newPaths);
    }
    return this.paths;
  }

  findShortestPath(departureStation, arrivalStation) {
    this.paths = [];
    const dijkstra = new Dijkstra();
    const paths = this.findPath(departureStation, arrivalStation, []);
    console.log(paths);

    paths.forEach((path) => {
      if (paths.length === 1) {
        dijkstra.addEdge(path.departureStation, path.arrivalStation, path.distance);
      } else {
        path.forEach((section) => {
          dijkstra.addEdge(section.departureStation, section.arrivalStation, section.distance);
        });
      }
    });

    const result = dijkstra.findShortestPath(departureStation, arrivalStation);
    return result;
  }

  findSectionsByDepartureStation(departureStationName) {
    const sections = this.findAllSections();

    const targets = sections.filter((section) => {
      return section.departureStation === departureStationName;
    });

    return targets;
  }
}

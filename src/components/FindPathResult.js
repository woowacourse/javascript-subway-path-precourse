import { getResultHeader, resultTableTemplate } from '../utils/templates.js';
import { lines } from '../data/data.js';

export class FindPathResult {
  constructor() {
    this.initializeDOM();
  }

  initializeDOM = () => {
    this.resultContainer = document.querySelector('#result_container');
  };

  render = (props) => {
    this.dijkstra = props.dijkstra;
    this.resultHTML = getResultHeader(props.weight);
    this.resultContainer.innerHTML = this.resultHTML;

    const sections = this.dijkstra.findShortestPath(props.departure, props.arrival);
    this.makeTable(sections, props.departure, props.arrival);
  };

  makeTable = (sections) => {
    let { time, distance } = this.getTimeAndDistance(sections);
    console.log(time, distance);
    this.table = document.querySelector('#result-table');
    this.table.innerHTML = resultTableTemplate(time, distance, sections);
  };

  getTimeAndDistance = (sections) => {
    let time = 0;
    let distance = 0;
    for (let i = 0; i < sections.length - 1; i++) {
      let depart = sections[i];
      let arrival = sections[i + 1];

      lines.forEach((line) => {
        time += this.getTimeOfSection(line.sections, depart, arrival);
        distance += this.getDistanceOfSection(line.sections, depart, arrival);
      });
    }
    return { time: time, distance: distance };
  };

  getTimeOfSection = (sections, depart, arrival) => {
    let time = 0;

    sections.forEach((section) => {
      if (section.start === depart && section.end === arrival) {
        time = section.time;
      }
    });

    return time;
  };

  getDistanceOfSection = (sections, depart, arrival) => {
    let distance = 0;

    sections.forEach((section) => {
      if (section.start === depart && section.end === arrival) {
        distance = section.distance;
      }
    });

    return distance;
  };
}

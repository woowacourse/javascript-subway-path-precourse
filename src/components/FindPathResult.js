import { getResultHeader, resultTableTemplate } from '../utils/templates.js';
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

    const sections = this.dijkstra.findShortestPath(
      props.departure,
      props.arrival,
    );
    this.makeTable(sections);
  };

  makeTable = (sections) => {
    let time = 0;
    let distance = 0;
    this.table = document.querySelector('#result-table');
    this.table.innerHTML = resultTableTemplate(time, distance, sections);
  };
}

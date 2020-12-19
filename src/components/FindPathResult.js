import { getResultHeader, tableHeader } from '../utils/templates.js';
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
  };
}

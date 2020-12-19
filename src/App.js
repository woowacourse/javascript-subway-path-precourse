import Result from './Result.js';

export default class App {
  constructor(target) {
    this.target = target;
    this.createHeader(target);
    this.createStationInput(target);
    this.createRadioButton(target);
    this.createSearchButton(target);

    this.resultContainer = document.createElement('div');
    this.resultContainer.className = 'result';
    target.appendChild(this.resultContainer);
  }

  createHeader(target) {
    const header = document.createElement('header');
    header.innerHTML = `<h1>🚇 지하철 길찾기</h1>`;
    target.appendChild(header);
  }

  createStationInput(target) {
    const container = document.createElement('div');
    target.appendChild(container);
    container.className = 'station-input';

    container.innerHTML = `
      <div>
        <label for="departure">출발역</label>
        <input
          type="text"
          name="departure"
          id="departure-station-name-input"
        />
      </div>
      <div>
        <label for="arrival">도착역</label>
        <input
          type="text"
          name="arrival"
          id="arrival-station-name-input"
        />
      </div>
    `;
  }

  createRadioButton(target) {
    const container = document.createElement('div');
    target.appendChild(container);
    container.className = 'radio-button';

    container.innerHTML = `
      <label>
        <input
          type="radio"
          name="search-type"
          value="최단거리"
          checked
        /> 최단거리
      </label>
      <label>
        <input 
          type="radio"
          name="search-type"
          value="최소시간"
        /> 최소시간
      </label>
    `;
  }

  createSearchButton(target) {
    const { renderResult } = this;
    const container = document.createElement('div');
    target.appendChild(container);

    container.innerHTML = `<button id="search-button">길찾기</button>`;

    const addButton = document.querySelector('#search-button');
    addButton.addEventListener('click', renderResult.bind(this));
  }


  renderResult() {
    const searchType = document
      .querySelector('input[name="search-type"]:checked').value;
    this.resultContainer.innerHTML = ``;
    this.result = new Result(this.resultContainer, {
      searchType,
    });
  }
}
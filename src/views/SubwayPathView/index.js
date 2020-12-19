import addTemplateToDOM from '../../utils/addTemplateToDOM';

export default class SubwayPathView {
  constructor(viewModel, appContainer) {
    this.viewModel = viewModel;
    this.appContainer = appContainer;

    this.renderEnTireTags();
  }

  renderEnTireTags() {
    this.renderSubwayPathInputContainer();
    this.renderSubwayPathResultContainer();
    this.renderSubwayPathInputs();
  }

  renderSubwayPathInputContainer() {
    addTemplateToDOM(this.appContainer, `<div id="subway-path-input-container"></div>`);
  }

  renderSubwayPathResultContainer() {
    addTemplateToDOM(this.appContainer, `<div id="subway-path-result-container"></div>`);
  }

  renderSubwayPathInputs() {
    addTemplateToDOM(
      this.appContainer.querySelector('#subway-path-input-container'),
      `
      <h1>🚇 지하철 길찾기</h1>
      <p>
        출발역
        <input id="subway-path-start-station-input"/>
      </p>
      <p>
        도착역
        <input id="subway-path-end-station-input"/>
      </p>
      `,
    );
  }
}

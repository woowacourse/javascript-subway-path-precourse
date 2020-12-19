import addTemplateToDOM from '../../utils/addTemplateToDOM';
import { message } from '../../constants';

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
    this.renderRadioButton();
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
      <h1>${message.TITLE}</h1>
      <p>
        ${message.START_STATION}
        <input id="subway-path-start-station-input"/>
      </p>
      <p>
        ${message.END_STATION}
        <input id="subway-path-end-station-input"/>
      </p>
      `,
    );
  }

  renderRadioButton() {
    addTemplateToDOM(
      this.appContainer.querySelector('#subway-path-input-container'),
      `
      <div>
      <input id="subway-path-radio-distance-button" type="radio" name="selectButton">${message.SHORTEST_DISTANCE}</input>
      <input id="subway-path-radio-time-button" type="radio" name="selectButton">${message.MINIMUN_TIME}</button>
      </div>
    `,
    );
  }
}

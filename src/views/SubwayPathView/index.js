import addTemplateToDOM from '../../utils/addTemplateToDOM';
import { SubwayPathViewEventDelegators } from '../../eventDelegators';
import { message } from '../../constants';

export default class SubwayPathView {
  constructor(viewModel, appContainer) {
    this.viewModel = viewModel;
    this.appContainer = appContainer;
    this.eventDelegator = new SubwayPathViewEventDelegators(this.viewModel, this.appContainer);

    this.eventDelegator.bindView(this);
    this.eventDelegator.bindEvent(this.appContainer);
    this.renderEnTireTags();
  }

  renderEnTireTags() {
    this.renderSubwayPathInputContainer();
    this.renderSubwayPathResultContainer();
    this.renderSubwayPathInputs();
    this.renderRadioButton();
    this.renderSearchButton();
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
      <div id="subway-path-radio-buttons-container">
      <input class="subway-path-radio-button" type="radio" value="searchShortestPaht" name="selectButton" checked>${message.SHORTEST_DISTANCE}</input>
      <input class="subway-path-radio-button" type="radio" value="searchMinumumTimePath" name="selectButton">${message.MINIMUN_TIME}</button>
      </div>
    `,
    );
  }

  renderSearchButton() {
    addTemplateToDOM(
      this.appContainer.querySelector('#subway-path-input-container'),
      `
        <button id="subway-path-search-button" data-purpose="searchPath">${message.SEARCH}</button>
      `,
    );
  }
}

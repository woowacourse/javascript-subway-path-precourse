import addTemplateToDOM from '../../utils/addTemplateToDOM';

export default class SubwayPathView {
  constructor(viewModel, appContainer) {
    this.viewModel = viewModel;
    this.appContainer = appContainer;

    this.renderSubContainers();
  }

  renderSubContainers() {
    this.renderSubwayPathInputContainer();
    this.renderSubwayPathResultContainer();
  }

  renderSubwayPathInputContainer() {
    addTemplateToDOM(this.appContainer, `<div id="subway-path-input-container"></div>`);
  }

  renderSubwayPathResultContainer() {
    addTemplateToDOM(this.appContainer, `<div id="subway-path-result-container"></div>`);
  }
}

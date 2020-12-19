export default class SubwayPathViewEventDelegators {
  constructor(viewModel, appContainer) {
    this.view = null;
    this.viewModel = viewModel;
    this.appContainer = appContainer;
  }

  bindView(view) {
    this.view = view;
  }

  bindEvent(element) {
    element.addEventListener('click', this.onClick.bind(this));
  }

  onClick(event) {
    const { dataset } = event.target;

    if (dataset.purpose) {
      this[dataset.purpose](dataset);
    }
  }

  searchPath(dataset) {
    const startStation = this.appContainer.querySelector('#subway-path-start-station-input').value;
    const endStation = this.appContainer.querySelector('#subway-path-end-station-input').value;
    const radioButtons = this.appContainer.querySelectorAll('.subway-path-radio-button');

    const how = this.getCheckedButtonValue(radioButtons);
    const result = this.viewModel.searchPath(startStation, endStation, how);

    if (result && how === 'searchShortestPath') {
      this.view.resetSubwayPathResultContainer();
      this.view.renderHeadingForShortestPath();
      this.view.renderTableContainer();
      this.view.renderTable(result);
    }

    if (result && how === 'searchMinumumTimePath') {
      this.view.resetSubwayPathResultContainer();
      this.view.renderHeadingForMinumumTimePath();
      this.view.renderTableContainer();
      this.view.renderTable(result);
    }
  }

  getCheckedButtonValue(radioButtons) {
    const checkedButton = Array.from(radioButtons).filter(button => {
      return button.checked;
    });

    return checkedButton[0].value;
  }
}

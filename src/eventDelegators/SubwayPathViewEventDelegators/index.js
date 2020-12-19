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

    this.getCheckedButtonValue(radioButtons);

    console.log(startStation, endStation);
  }

  getCheckedButtonValue(radioButtons) {
    const checkedButton = Array.from(radioButtons).filter(button => {
      return button.checked;
    });

    console.log(checkedButton[0].value);
    return checkedButton[0];
  }
}

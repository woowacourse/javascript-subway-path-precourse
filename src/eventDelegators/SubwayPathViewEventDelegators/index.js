export default class SubwayPathViewEventDelegators {
  constructor(viewModel) {
    this.view = null;
    this.viewModel = viewModel;
  }

  bindView(view) {
    this.view = view;
  }

  bindEvent(element) {
    element.addEventListener('click', this.onClick.bind(this));
  }

  onClick(event) {
    console.log('call');
  }
}

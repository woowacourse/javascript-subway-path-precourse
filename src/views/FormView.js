import View from "./View.js";

export default class FormView extends View {
  constructor() {
    super();
    this.tag = "[FormView]";
  }

  setup(el) {
    this.init(el);
    return this;
  }
}

//최소거리
import View from "./View.js";

export default class minimumRadioView extends View {
  constructor() {
    super();
    this.tag = "[minimumRadioView]";
  }

  setup(el) {
    this.init(el);
    this.radioInfo();
    return this;
  }

  radioInfo() {
    console.log(this.tag, "radioInfo()");
    console.log(this.el.value);
    console.log(this.el.checked);
    return this.el.checked;
  }
}

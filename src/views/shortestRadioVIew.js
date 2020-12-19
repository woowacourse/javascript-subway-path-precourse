//최단거리
import View from "./View.js";

export default class shortestRadioView extends View {
  constructor() {
    super();
    this.tag = "[shortestRadioVIew]";
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

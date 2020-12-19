import { Stations, Lines } from "../models/data.js";
import FormView from "../views/FormView.js";

export default class MainController {
  constructor() {
    this.tag = "[MainController]";
    this.FormView = new FormView();
  }
  init() {
    this.FormView.setup(document.querySelector("#app"));
  }
}

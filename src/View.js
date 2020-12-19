import { INIT, RESULT } from "./constants/skeleton.js";

export default class View {
  constructor() {
    this.initialize();
  }

  initialize() {
    const appEl = document.getElementById("app");
    appEl.innerHTML = INIT + RESULT;
  }
}

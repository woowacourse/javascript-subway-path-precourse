import { makeElement } from "../utils/html-maker.js";

export default class View {
  constructor(containerID) {
    this._containerID = containerID;
  }
  setContainerByID(id, contents) {
    const container = document.getElementById(id);
    container.innerHTML = contents;
  }
  clearContainerByID(id) {
    this.setContainerByID(id, "");
  }
  appendChildsByID(id, contents = []) {
    const container = document.getElementById(id);
    contents.forEach((content) => {
      container.appendChild(content);
    });
  }
}

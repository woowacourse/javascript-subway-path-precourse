import { TITLE_TEXT } from "../utils/constants.js";

export default class Header {
  constructor({ $target }) {
    this.$header = document.createElement("header");
    $target.insertAdjacentElement("afterbegin", this.$header);

    this.render();
  }

  render = () => {
    this.$header.innerHTML = `<h1>${TITLE_TEXT.app}</h1>`;
  };
}

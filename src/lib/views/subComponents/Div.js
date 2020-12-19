export default class Div {
  constructor(props) {
    const { id } = props;
    this.element = document.createElement("div");
    this.element.id = id;
    this.querySelector = `#${this.element.id}`;
  }
}

export default class Div {
  constructor(props) {
    const { id, children } = props;
    this.element = document.createElement("div");
    this.element.id = id;
    this.querySelector = `#${this.element.id}`;
    if (children) children.forEach((child) => this.addChildren(child));
  }

  addChildren(childNode) {
    this.element.appendChild(childNode);
  }
}

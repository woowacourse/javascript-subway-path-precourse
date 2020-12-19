export default class Typography {
  constructor(props) {
    const { innerText, type, children } = props;
    this.element = document.createElement(type || "p");
    this.element.innerText = innerText;
    if (children) children.forEach((child) => this.addChildren(child));
  }

  addChildren(childNode) {
    this.element.appendChild(childNode);
  }
}

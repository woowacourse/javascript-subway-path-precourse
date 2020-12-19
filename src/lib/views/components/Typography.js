export default class Typography {
  constructor(props) {
    const { id, type } = props;
    this.element = document.createElement(type);
    this.element.innerText = id;
  }
}

export default class Button {
  constructor(props) {
    const { id, helperText, callbackFunction } = props;
    this.element = document.createElement("button");
    this.element.id = id;
    this.element.innerText = helperText;
    this.element.onclick = () => callbackFunction();
  }
}

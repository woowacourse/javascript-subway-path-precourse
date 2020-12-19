export default class Input {
  constructor(props) {
    const { id, type, callbackFunction } = props;
    this.element = document.createElement("input");
    this.element.id = id;
    this.element.type = type || "text";
    this.element.addEventListener("keydown", (e) => {
      if (e.key === "Enter") return callbackFunction();
    });
    this.fillInputElement(props);
  }

  fillInputElement(props) {
    const { type, helperText, id, name } = props;
    if (type) {
      this.element.name = name;
      this.element.value = id;
      this.element.innerText = helperText;
    } else {
      this.element.placeholder = helperText;
    }
  }
}

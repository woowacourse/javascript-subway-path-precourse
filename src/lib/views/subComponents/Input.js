export default class Input {
  constructor(props) {
    const { id, helperText, callbackFunction } = props;
    this.element = document.createElement("input");
    this.element.placeholder = helperText;
    this.element.id = id;
    this.element.type = "text";
    this.element.addEventListener("keydown", (e) => {
      if (e.key === "Enter") return callbackFunction(this.element.value);
    });
    this.querySelector = `#${this.element.id}`;
  }

  clearValue() {
    this.element.value = "";
  }
}

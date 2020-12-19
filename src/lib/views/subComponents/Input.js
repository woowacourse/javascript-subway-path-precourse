export default class Input {
  constructor(props) {
    const { id, type, helperText, callbackFunction } = props;
    this.element = document.createElement("input");
    this.element.placeholder = helperText;
    this.element.id = id;
    this.element.type = type || "text";
    this.element.addEventListener("keydown", (e) => {
      if (e.key === "Enter") return callbackFunction();
    });
  }
}

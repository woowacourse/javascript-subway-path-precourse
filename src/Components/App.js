import AbstractComponent from "./AbstractComponent.js";

export default class App extends AbstractComponent {
  constructor(props) {
    super(props);
    this.render();
  }

  render() {
    super.render();
    this.$component.innerHTML = "Hello, World!";
  }
}
import AbstractComponent from "./AbstractComponent.js";
import Input from "./Input.js";

export default class App extends AbstractComponent {
  constructor(props) {
    super(props);
    this.render();
  }

  render() {
    super.render();
    this.renderHeader();
    this.renderInput();
    // this.renderResult();
  }

  renderHeader() {
    this.header = document.createElement("h1");
    this.header.innerText = "🚇 지하철 길찾기";

    this.$component.append(this.header);
  }

  renderInput() {
    new Input({ $parent: this.$component });      
  }
  
}
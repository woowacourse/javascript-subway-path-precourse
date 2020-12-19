import AbstractComponent from "./AbstractComponent.js";
import Input from "./Input.js";
import Result from "./Result.js";

export default class App extends AbstractComponent {
  
  constructor(props) {
    super(props);
    this.render();
  }

  render() {
    super.render();
    this.renderHeader();
    this.renderInput();
    this.renderResult();
  }

  renderHeader() {
    this.header = document.createElement("h1");
    this.header.innerText = "🚇 지하철 길찾기";

    this.$component.append(this.header);
  }

  renderInput() {
    new Input({ $parent: this.$component });      
  }

  renderResult() {
    new Result({
      $parent: this.$component,
      searchType: "최단거리" // UI테스트용 임시 값. TODO: state의 값으로 할당해줘야 함
    });
  }
}
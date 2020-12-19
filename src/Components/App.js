import { lines, sections, stations } from "../Data/data.js";
import AbstractComponent from "./AbstractComponent.js";
import Input from "./Input.js";
import Result from "./Result.js";

export default class App extends AbstractComponent {
  
  constructor(props) {
    super(props);
    this.initializeState();
    this.initializeVariables();
    this.render();
  }

  initializeState() {
    this.state = {
      searchType: "",
      routes: []
    };
  }

  initializeVariables() {
    this.stations = stations;
    this.lines = lines;
    this.sections = sections;
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
    new Input({
      $parent: this.$component,
      tagname: "form",
      handleRoutesChange: newRoutes => this.handleRoutesChange(newRoutes)
    });      
  }

  renderResult() {
    const { searchType, routes } = this.state;

    new Result({
      $parent: this.$component,
      searchType,
      routes
    });
  }

  handleRoutesChange({ searchType, routes }) {
    this.setState({ searchType, routes });
  }
}
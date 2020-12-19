import { INNER_TEXT } from "../Constants/Result.js";
import AbstractComponent from "./AbstractComponent.js";
import ResultTable from "./ResultTable.js";

export default class Result extends AbstractComponent {
  constructor(props) {
    super(props);
    this.render();
  }

  render() {
    super.render();
    this.renderResultTitle();
    this.renderResultType();
    this.renderResultTable();
  }

  renderResultTitle() {
    this.$resultTitle = document.createElement("h2");
    this.$resultTitle.innerText = INNER_TEXT.RESULT_TITLE;

    this.$component.append(this.$resultTitle);
  }

  renderResultType() {
    const { searchType } = this.props;
    this.$resultType = document.createElement("h3");
    this.$resultType.innerText = searchType;

    this.$component.append(this.$resultType);
  }

  renderResultTable() {
    const { routes } = this.props;
    this.$resultTable = document.createElement("table");
    this.resultTable = new ResultTable({
      $parent: this.$resultTable,
      tagname: "tbody",
      routes
    });

    this.$component.append(this.$resultTable);
  }

}
import { RESULT_CONTAINER_ID } from "../../../common/DOMelementNames.js";
import {
  SHORTEST_PATH_TEXT,
  FASTEST_PATH_TEXT,
} from "../../../common/constants.js";
import Typography from "../../subComponents/Typography.js";
import ResultTable from "./resultTable.js";
import ResultTitle from "../title/ResultTitle.js";
import addChildrenToParentNode from "../../config/addChildrenToParentNode.js";

const SubTitle = ({ shortestPathChecked }) =>
  new Typography({
    innerText: shortestPathChecked ? SHORTEST_PATH_TEXT : FASTEST_PATH_TEXT,
    type: "h3",
  });

export default (props) => {
  const $resultContainer = document.getElementById(RESULT_CONTAINER_ID);
  const $resultTable = new ResultTable(props);
  $resultContainer.innerHTML = "";
  addChildrenToParentNode([ResultTitle, SubTitle(props), $resultTable], $resultContainer);
};

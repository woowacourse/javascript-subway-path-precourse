import AppTitle from "../components/title/AppTitle.js";
import InputContainer from "../components/containers/InputContainer.js";
import ResultContainer from "../components/containers/ResultContainer.js";
import addChildrenToParentNode from "./addChildrenToParentNode.js";

export default () => {
  const $appContainer = document.getElementById("app");
  addChildrenToParentNode(
    [AppTitle, InputContainer, ResultContainer],
    $appContainer,
  );
};

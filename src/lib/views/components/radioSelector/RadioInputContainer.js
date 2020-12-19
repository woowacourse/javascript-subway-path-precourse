import Div from "../../subComponents/Div.js";
import Typography from "../../subComponents/Typography.js";
import Input from "../../subComponents/Input.js";
import {
  SELECT_TYPE_CONTAINER_ID,
  SELECT_TYPE_NAME_ATTRIBUTE,
  SHORTEST_PATH_SELECT_ID,
  FASTEST_PATH_SELECT_ID,
} from "../../../common/DOMelementNames.js";
import {
  SHORTEST_PATH_TEXT,
  FASTEST_PATH_TEXT,
} from "../../../common/constants.js";

const radioInputSelectOptions = [
  {
    id: SHORTEST_PATH_SELECT_ID,
    name: SELECT_TYPE_NAME_ATTRIBUTE,
    helperText: SHORTEST_PATH_TEXT,
  },
  {
    id: FASTEST_PATH_SELECT_ID,
    name: SELECT_TYPE_NAME_ATTRIBUTE,
    helperText: FASTEST_PATH_TEXT,
  },
].map((attributes) => new Input({ ...attributes, type: "radio" }).element);

// 라디오 인풋 값 넣어주기

export default new Div({
  id: SELECT_TYPE_CONTAINER_ID,
  children: radioInputSelectOptions,
});

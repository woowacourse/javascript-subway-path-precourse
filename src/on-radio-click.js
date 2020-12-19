import { SEARCH_TYPE } from "../constant.js";
import { setState, state } from "./state.js";

const onRadioClick = function ({ target: { value } }) {
  if (state.searchType !== value) setState(SEARCH_TYPE, value);
};
export default onRadioClick;

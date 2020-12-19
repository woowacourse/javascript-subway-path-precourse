import { setState, state } from "./state.js";

const onRadioClick = function ({ target: { value } }) {
  if (state.searchType !== value) setState("searchType", value);
};
export default onRadioClick;

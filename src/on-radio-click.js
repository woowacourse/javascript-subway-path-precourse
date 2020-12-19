import { setState, state } from "./state.js";

const onRadioClick = function ({ target: { value } }) {
  if (state.orderBy !== value) setState("orderBy", value);
};
export default onRadioClick;

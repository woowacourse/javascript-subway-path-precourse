import { Constant } from "../utils/constant.js";

export const ElementControl = {
  showResultContainer() {
    document.querySelector(Constant.RESULT_CONTAINER_ID).style.display =
      Constant.BLOCK;
  },
};

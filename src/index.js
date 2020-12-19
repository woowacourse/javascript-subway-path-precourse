import { SubwayPathController } from "./controller/subway-path-controller.js";
import { LineModel } from "./model/Line.js";
import { Constant } from "./utils/constant.js";

const app = () => {
  subwayPathManager();
};

const subwayPathManager = () => {
  SubwayPathController.init();
  // console.log(LineModel.list());

  document
    .querySelector(Constant.SEARCH_BUTTON_ID)
    .addEventListener(Constant.CLICK, () => {
      SubwayPathController.onClickSearchButton();
    });
};

app();

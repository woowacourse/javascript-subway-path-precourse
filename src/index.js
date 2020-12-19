import { SubwayPathController } from "./controller/subway-path-controller.js";
import { Constant } from "./utils/constant.js";
import { Data } from "./utils/data.js";

const app = () => {
  subwayPathManager();
};

const subwayPathManager = () => {
  Data.initStations();
  Data.initDistance();
  Data.initTime();

  document
    .querySelector(Constant.SEARCH_BUTTON_ID)
    .addEventListener(Constant.CLICK, () => {
      SubwayPathController.onClickSearchButton();
    });
};

app();

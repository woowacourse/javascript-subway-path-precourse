import { SubwayPathController } from "./controller/subway-path-controller.js";
import { LineModel } from "./model/Line.js";

const app = () => {
  subwayPathManager();
};

const subwayPathManager = () => {
  SubwayPathController.init();

  console.log(LineModel.list());
};

app();

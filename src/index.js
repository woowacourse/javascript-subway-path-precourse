import { ID } from "./common/const.js";
import SubwayPathController from "./controller/subway-path-controller.js";
import { initialLineInputs } from "./initial-input.js";
import Models from "./model/models.js";
import SubwayPathView from "./view/subway-path-view.js";

const models = new Models(initialLineInputs);

new SubwayPathController(new SubwayPathView(ID.APP), models);

import { ID } from "./common/const.js";
import SubwayPathController from "./controller/subway-path-controller.js";
import Models from "./model/models.js";
import SubwayPathView from "./view/subway-path-view.js";

const models = new Models();

new SubwayPathController(new SubwayPathView(ID.APP), models);

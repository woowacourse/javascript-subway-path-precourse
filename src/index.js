import { ID } from "./common/const.js";
import SubwayPathController from "./controller/subway-path-controller.js";
import { LINES } from "./initial-input.js";
import Models from "./model/models.js";
import SubwayPathView from "./view/subway-path-view.js";

const initialInput = LINES;
const models = new Models(initialInput);

new SubwayPathController(new SubwayPathView(ID.APP), models);

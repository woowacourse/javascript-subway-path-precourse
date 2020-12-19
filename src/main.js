import { addEventToMainBtns } from "./managers/init.js";
import { subwayModel } from "./models/subwayModel.js";
import { SUBWAY_DATAS } from "./views/search/const.js";

export default function main() {
  let subwayDatas = subwayModel;

  addEventToMainBtns();

  localStorage.setItem(SUBWAY_DATAS, JSON.stringify(subwayDatas));
}

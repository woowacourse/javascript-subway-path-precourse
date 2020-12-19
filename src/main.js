import { addEventToMainBtns } from "./managers/init.js";
import { subwayModel } from "./models/subwayModel.js";
export default function main() {
  //   initHTML();
  let subwayDatas = subwayModel;
  addEventToMainBtns();
  localStorage.setItem("subwayDatas", JSON.stringify(subwayDatas));
}

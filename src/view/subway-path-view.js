import { Constant } from "../utils/constant.js";

export const SubwayPathView = {
  renderDistance(result) {
    let content = "";

    content = `<td colspan="2">${result.join("➡️")}</td>`;
    document.querySelector(Constant.ROUTE).innerHTML = content;
  },

  renderTime(result) {
    let content = "";

    content = `<td colspan="2">${result.join("➡️")}</td>`;
    document.querySelector(Constant.ROUTE).innerHTML = content;
  },
};

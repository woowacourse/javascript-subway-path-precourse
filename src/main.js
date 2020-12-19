import { initHTML, addEventToMainBtns } from "./managers/init.js";

export default function main() {
  let subwayDatas = {
    stations: ["교대", "강남", "역삼", "남부터미널", "양재", "양재시민의숲", "매봉"],
    lines: [
      { name: "2호선", stops: ["교대", "강남", "역삼"] },
      { name: "3호선", stops: ["교대", "남부터미널", "양재", "매봉"] },
      { name: "신분당선", stops: ["강남", "양재", "양재시민의숲"] },
    ],
    sections: [
      { depart: "교대", end: "강남", time: 3, distance: 2 },
      { depart: "강남", end: "교대", time: 3, distance: 2 },
      { depart: "강남", end: "역삼", time: 3, distance: 2 },
      { depart: "역삼", end: "강남", time: 3, distance: 2 },
      { depart: "교대", end: "남부터미널", time: 2, distance: 3 },
      { depart: "남부터미널", end: "교대", time: 2, distance: 3 },
      { depart: "남부터미널", end: "양재", time: 5, distance: 6 },
      { depart: "양재", end: "남부터미널", time: 5, distance: 6 },
      { depart: "양재", end: "매봉", time: 1, distance: 1 },
      { depart: "매봉", end: "양재", time: 1, distance: 1 },
      { depart: "강남", end: "양재", time: 8, distance: 2 },
      { depart: "양재", end: "강남", time: 8, distance: 2 },
      { depart: "양재", end: "양재시민의숲", time: 3, distance: 10 },
      { depart: "양재시민의숲", end: "양재", time: 3, distance: 10 },
    ],
  };

  initHTML();
  addEventToMainBtns();
}

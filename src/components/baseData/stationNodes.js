import { StationNode } from "../../model/stationNode.js"

export const stationNodes = [
    new StationNode("교대", "강남", { time: 3, distance: 2 }),
    new StationNode("강남", "역삼", { time: 3, distance: 2 }),
    new StationNode("교대", "남부터미널", { time: 2, distance: 3 }),
    new StationNode("남부터미널", "양재", { time: 5, distance: 6 }),
    new StationNode("양재", "매봉", { time: 1, distance: 1 }),
    new StationNode("강남", "양재", { time: 8, distance: 2 }),
    new StationNode("양재", "양재시민의 숲", { time: 3, distance: 10 })
];
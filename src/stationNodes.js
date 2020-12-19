import { stationNode } from "./stationNode.js"

export const stationNodes = [
    new stationNode("교대", "강남", { 시간: 3, 거리: 2 }),
    new stationNode("강남", "역삼", { 시간: 3, 거리: 2 }),
    new stationNode("교대", "남부터미널", { 시간: 2, 거리: 3 }),
    new stationNode("남부터미널", "양재", { 시간: 5, 거리: 6 }),
    new stationNode("양재", "매봉", { 시간: 1, 거리: 1 }),
    new stationNode("강남", "양재", { 시간: 8, 거리: 2 }),
    new stationNode("양재", "양재시민의 숲", { 시간: 3, 거리: 10 })
];
import { Station } from "./station.js"

export const stations = {
    "교대": new Station("교대", ["강남", "남부터미널"]),
    "강남": new Station("강남", ["역삼", "양재"]),
    "역삼": new Station("역삼", []),
    "남부터미널": new Station("남부터미널", ["양재"]),
    "양재": new Station("양재", ["매봉", "양재시민의 숲"]),
    "매봉": new Station("매봉", []),
    "양재시민의 숲": new Station("양재시민의 숲", [])
}
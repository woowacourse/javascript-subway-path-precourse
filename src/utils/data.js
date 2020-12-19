export const stations = [
    {
        name: "교대"
    },
    {
        name: "강남"
    },
    {
        name: "역삼"
    },
    {
        name: "남부터미널"
    },
    {
        name: "양재"
    },
    {
        name: "양재시민의숲"
    },
    {
        name: "매봉"
    }
]

export const lines = [
    {
        name: "2호선",
        station: ["교대", "강남", "역삼"],
        distance: [2, 2, 0],
        time: [3, 3, 0]
    },
    {
        name: "3호선",
        station: ["교대", "남부터미널", "양재", "매봉"],
        distance: [3, 6, 1, 0],
        time: [2, 5, 1, 0]
    },
    {
        name: "신분당선",
        station: ["강남", "양재", "양재시민의숲"],
        distance: [2, 10, 0],
        time: [8, 3, 0]
    }
]
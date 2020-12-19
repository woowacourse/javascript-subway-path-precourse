export const stations = [
  {
    name: "교대",
    lines: ["2호선", "3호선"],
    transfer: true
  },
  {
    name: "강남",
    lines: ["2호선", "신분당선"],
    transfer: true
  },
  {
    name: "양재",
    lines: ["3호선", "신분당선"],
    transfer: true
  },
  {
    name: "역삼",
    lines: ["2호선"],
    transfer: false
  },
  {
    name: "남부터미널",
    lines: ["3호선"],
    transfer: false
  },
  {
    name: "매봉",
    lines: ["3호선"],
    transfer: false
  },
  {
    name: "양재시민의숲",
    lines: ["신분당선"],
    transfer: false
  },
]

export const path = [
  {
    name: "2호선",
    route: {
      0: "교대",
      1: "강남",
      2: "역삼"
    }
  },
  {
    name: "3호선",
    route: {
      0: "교대",
      1: "남부터미널",
      2: "양재",
      3: "매봉"
    }
  },
  {
    name: "신분당선",
    route: {
      0: "강남",
      1: "양재",
      2: "양재시민의숲"
    }
  }
]
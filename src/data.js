export const stations = [
  {
    name: "교대",
    lines: ["2호선", "3호선"],
    transfer: true,
    prev: null,
    next: [
      {
        lines: "2호선",
        distance: 2,
        time: 3
      },
      {
        lines: "3호선",
        distance: 3,
        time: 2
      },
    ]
  },
  {
    name: "강남",
    lines: ["2호선", "신분당선"],
    transfer: true,
    prev: [
      {
        lines: "2호선",
        distance: 2,
        time: 3
      },
      {
        lines: "신분당선",
        distance: 0,
        time: 0,
      }
    ],
    next: [
      {
        lines: "2호선",
        distance: 2,
        time: 3
      },
      {
        lines: "신분당선",
        distance: 2,
        time: 8
      },
    ]
  },
  {
    name: "양재",
    lines: ["3호선", "신분당선"],
    transfer: true,
    prev: [
      {
        lines: "3호선",
        distance: 6,
        time: 5
      },
      {
        lines: "신분당선",
        distance: 2,
        time: 8
      }
    ],
    next: [
      {
        lines: "3호선",
        distance: 1,
        time: 1
      },
      {
        lines: "신분당선",
        distance: 10,
        time: 3
      },
    ]
  },
  {
    name: "역삼",
    lines: ["2호선"],
    transfer: false,
    prev: [
      {
        lines: "2호선",
        distance: 2,
        time: 3
      }
    ],
    next: null
  },
  {
    name: "남부터미널",
    lines: ["3호선"],
    transfer: false,
    prev: [
      {
        lines: "3호선",
        distance: 3,
        time: 2
      }
    ],
    next: [
      {
        lines: "3호선",
        distance: 6,
        time: 5
      }
    ]
  },
  {
    name: "매봉",
    lines: ["3호선"],
    transfer: false,
    prev: [
      {
        lines: "3호선",
        distance: 1,
        time: 1
      }
    ],
    next: null
  },
  {
    name: "양재시민의숲",
    lines: ["신분당선"],
    transfer: false,
    prev: [
      {
        lines: "신분당선",
        distance: 10,
        time: 3
      }
    ],
    next: null
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
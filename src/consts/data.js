export const stations = [
  '교대', '강남', '역삼', '남부터미널', '양재', '양재시민의숲', '매봉'
]

export const lines = [
  {
    name: "2호선",
    sequence: [
      {
        deptStation: "교대",
        destStation: "강남",
        distance: 2,
        time: 3,
      },
      {
        deptStation: "강남",
        destStation: "역삼",
        distance: 2,
        time: 3,
      },
    ]
  },
  {
    name: "3호선",
    sequence: [
      {
        deptStation: "교대",
        destStation: "남부터미널",
        distance: 3,
        time: 2,
      },
      {
        deptStation: "남부터미널",
        destStation: "양재",
        distance: 6,
        time: 5,
      },
      {
        deptStation: "양재",
        destStation: "매봉",
        distance: 1,
        time: 1,
      },
    ]
  },
  {
    name: "신분당선",
    sequence: [
      {
        deptStation: "강남",
        destStation: "양재",
        distance: 2,
        time: 8,
      },
      {
        deptStation: "양재",
        destStation: "양재시민의숲",
        distance: 10,
        time: 3,
      },
    ]
  }
]
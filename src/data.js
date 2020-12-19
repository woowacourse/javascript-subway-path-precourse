const stations = [
  "교대",
  "강남",
  "역삼",
  "남부터미널",
  "양재",
  "매봉",
  "양재시민의숲",
];

const sections = {
  "교대-강남": {
    distance: 2,
    time: 3,
  },
  "강남-역삼": {
    distance: 2,
    time: 3,
  },
  "교대-남부터미널": {
    distance: 3,
    time: 2,
  },
  "남부터미널-양재": {
    distance: 6,
    time: 5,
  },
  "양재-매봉": {
    distance: 1,
    time: 1,
  },
  "강남-양재": {
    distance: 2,
    time: 8,
  },
  "양재-양재시민의숲": {
    distance: 10,
    time: 3,
  },
};

export { stations, sections };

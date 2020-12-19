class Line {
  constructor(name, distance, time) {
    this.name = name;
    this.distance = distance;
    this.time = time;
  }
}

const allLines = [
  new Line("교대", 2, 3),
  new Line("강남", 2, 3),
  new Line("역삼", 0, 0),
  new Line("남부터미널", 6, 5),
  new Line("양재", 1, 1),
  new Line("매봉", 0, 0),
  new Line("양재시민의숲", 0, 0)    
]

const line2 = [
  new Line("교대", 2, 3),
  new Line("강남", 2, 3),
  new Line("역삼", 0, 0)
]

const line3 = [
  new Line("교대", 2, 3),
  new Line("남부터미널", 6, 5),
  new Line("양재", 1, 1),
  new Line("매봉", 0, 0)
]

const lineNew = [
  new Line("강남", 2, 8),
  new Line("양재", 10, 3),
  new Line("양재시민의숲", 0, 0)
]

export { line2, line3, lineNew, allLines };
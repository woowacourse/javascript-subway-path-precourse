const sections = [
  { start: '교대', end: '강남', distance: 2, time: 3 },
  { start: '강남', end: '역삼', distance: 2, time: 3 },
  { start: '교대', end: '남부터미널', distance: 3, time: 2 },
  { start: '남부터미널', end: '양재', distance: 6, time: 5 },
  { start: '양재', end: '매봉', distance: 1, time: 1 },
  { start: '강남', end: '양재', distance: 2, time: 8 },
  { start: '양재', end: '양재시민의숲', distance: 10, time: 3 },
]

export default function getDistanceAndTime(path) {
  const distanceAndTime = {
    totalDistance: 0,
    totalTime: 0,
  }

  for(let i = 0; i < path.length - 1; i += 1) {
    const startStation = path[i];
    const endStation = path[i + 1];
    const findValue = sections.find(({ start, end }) => {
      return start === startStation && end === endStation;
    })

    distanceAndTime.totalDistance += findValue.distance;
    distanceAndTime.totalTime += findValue.time;
  }

  return distanceAndTime;
}
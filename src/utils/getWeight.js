import { sections } from '../Data.js';

export default function getDistanceAndTime(path) {
  const distanceAndTime = {
    totalDistance: 0,
    totalTime: 0,
  }

  for(let i = 0; i < path.length - 1; i += 1) {
    const startStation = path[i];
    const endStation = path[i + 1];
    const findValue = sections.find(({ start, end }) => {
      return (start === startStation && end === endStation) ||
        (start === endStation && end === startStation );
    })

    distanceAndTime.totalDistance += findValue.distance;
    distanceAndTime.totalTime += findValue.time;
  }

  return distanceAndTime;
}
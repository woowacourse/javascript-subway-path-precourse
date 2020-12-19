import { LINES } from '../configuration.js';

export const calculateTotalRequired = (path, option) => {
  let total = 0;

  for (let i = 0; i < path.length - 1; i++) {
    let start = path[i];
    let end = path[i + 1];

    total += traverseLine(start, end, option);
  }
  return total;
};

const traverseLine = (start, end, option) => {
  let interval = -1;

  for (let i = 0; i < LINES.length; i++) {
    interval = traverseStation(LINES[i], start, end, option);
    if (interval !== -1) {
      break;
    }
  }
  return interval;
};

const traverseStation = (line, start, end, option) => {
  const stations = line.stations;
  const intervals = line[option];
  let interval = -1;

  for (let i = 0; i < stations.length - 1; i++) {
    if (stations[i] === start && stations[i + 1] === end) {
      interval = intervals[i];
      break;
    }
  }
  return interval;
};

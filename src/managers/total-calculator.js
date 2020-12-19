import { LINES } from '../configuration.js';

export const calculateTotalRequired = (path, option) => {
  let total = 0;

  console.log(path);
  for (let i = 0; i < path.length - 1; i++) {
    let start = path[i];
    let end = path[i + 1];

    total += findInterval(start, end, option);
  }
  return total;
};

const findInterval = (start, end, option) => {
  let interval = -1;

  LINES.forEach((line) => {
    const stations = line.stations;
    const intervals = line[option];

    for (let i = 0; i < stations.length - 1; i++) {
      if (stations[i] === start && stations[i] === end) {
        interval = intervals[i];
        break;
      }
    }
  });
  console.log(interval);
  return interval;
};

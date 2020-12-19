import { sections } from "../Data/data.js";

const getAdjacentStations = curr => {
  return sections.find(({ station }) => station === curr);
};

const getNextStation = (adjacent, next) => {
  return adjacent.find(({ station }) => station === next);
};

const getWeight = (curr, next) => {
  const { adjacent } = getAdjacentStations(curr);
  const { dist, time } = getNextStation(adjacent, next);

  return { dist, time };
};

export const calculateTotalDistanceAndTime = routes => {
  let totalDistance = 0;
  let totalTime = 0;
  for (let i = 0; i < routes.length - 1; i++) {
    const [curr, next] = [routes[i], routes[i + 1]];
    const { dist, time } = getWeight(curr, next);
    totalDistance += dist;
    totalTime += time;
  }

  return [totalDistance, totalTime];
};
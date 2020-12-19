import { LESS_THAN_TWO, NOT_INCLUDES } from './constants.js';

export default function stationValidation(start, end, stations) {
  if (ltTwo(start) || ltTwo(end)) return LESS_THAN_TWO;
  if (!stations.includes(start) || !stations.includes(start))
    return NOT_INCLUDES;
}

const ltTwo = name => {
  return name.length < 2;
};

import { INPUT_ERROR } from './constants.js';

export default function stationValidation(start, end, stations) {
  if (ltTwo(start) || ltTwo(end)) return INPUT_ERROR.LESS_THAN_TWO_ERROR;
  if (!stations.includes(start) || !stations.includes(start))
    return INPUT_ERROR.NOT_INCLUDES_ERROR;
  if (start === end) return INPUT_ERROR.SAME_STATION_ERROR;
}

const ltTwo = name => {
  return name.length < 2;
};

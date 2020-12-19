import { INPUT_ERROR } from './constants.js';

export default function stationValidation(start, end, stations) {
  if (noInput(start) || noInput(end)) {
    return { error: INPUT_ERROR.NO_INPUT_ERROR };
  }
  if (ltTwo(start) || ltTwo(end)) {
    return { error: INPUT_ERROR.LESS_THAN_TWO_ERROR };
  }
  if (!stations.includes(start) || !stations.includes(start))
    return { error: INPUT_ERROR.NOT_INCLUDES_ERROR };
  if (start === end) return { error: INPUT_ERROR.SAME_STATION_ERROR };
  return { success: true };
}

const noInput = name => {
  return name === '';
};

const ltTwo = name => {
  return name.length < 2;
};

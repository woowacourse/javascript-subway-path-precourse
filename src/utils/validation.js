import { LESS_THAN_TWO } from './constants.js';

export default function stationValidation(start, end) {
  if (ltTwo(start) || ltTwo(end)) return LESS_THAN_TWO;
}

const ltTwo = name => {
  return name.length < 2;
};

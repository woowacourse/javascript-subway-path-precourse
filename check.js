import { allLines } from '../line.js'

const isValidLength = (stationName) => {
  return (stationName.length >= 2);
}

const isValidStation = (stationName) => {
  const result = allLines.map((line) => line.name === stationName);
  let i;
  for (i = 0; i < result.length; i++) {
    if (result[i] === true) {
      return true;
    }
  }
}

export { isValidLength, isValidStation };
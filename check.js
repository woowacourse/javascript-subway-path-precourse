import { allLines } from '../line.js'

const isValidLength = (departureStationName) => {
  return (departureStationName.length >= 2);
}

const isDuplicated = (departureStationName) => {
  const result = allLines.map((line) => line.name === departureStationName);
  let i;
  for (i = 0; i < result.length; i++) {
    if (result[i] === true) {
      return true;
    }
  }
}

export { isValidLength, isDuplicated };
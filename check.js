import { getDepartureStationName } from './src/index.js'
import { line2, line3, lineNew, allLines } from '../line.js'

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

const isDuplicatedStation = (stationName) => {
  return (getDepartureStationName() === stationName);
}

const isSameLine = (line, arrivalStationName) => {
  const result = line.filter((station) => station.name === arrivalStationName)
  console.log(result)
}

const isConnected = (departureStationName, arrivalStationName) => {
  const LINE_LENGTH = 3;
  const lines = [line2, line3, lineNew];
  let i;
  for (i = 0; i < LINE_LENGTH; i++) {
    if (lines[i].find((line) => line.name === departureStationName)) {
      isSameLine(lines[i], arrivalStationName)
    }
  }
}

export { isValidLength, isValidStation, isDuplicatedStation, isConnected };
import { getDepartureStationName } from './src/index.js'
import { line2, line3, lineNew, allLines } from './src/line/line.js'
import { getOptionValue } from './src/index.js'

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

const isSameLine = (line, departureStationName, arrivalStationName) => {
  const result = line.filter((station) => station.name === arrivalStationName)
  if (result.length === 0) {
    console.log("next")
  } else {
    getOptionValue(line, departureStationName, arrivalStationName);
  }
}

const isConnected = (departureStationName, arrivalStationName) => {
  const LINE_LENGTH = 3;
  const lines = [line2, line3, lineNew];
  let i;
  for (i = 0; i < LINE_LENGTH; i++) {
    if (lines[i].find((line) => line.name === departureStationName)) {
      isSameLine(lines[i], departureStationName, arrivalStationName)
      break
    }
  }
}

export { isValidLength, isValidStation, isDuplicatedStation, isConnected };
import { stations } from "../path-finder/datas.js";

const isNull = (value) => {
  return value === "";
};

const isUnderTwo = (value) => {
  return value.length < 2;
};

const isUndefind = (value) => {
  return stations.map((x) => x.name).indexOf(value) === -1;
};

const isEqual = (value1, value2) => {
  return value1 === value2;
};

export { isNull, isUnderTwo, isUndefind, isEqual };

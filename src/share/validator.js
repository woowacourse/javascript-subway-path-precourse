export const isInclude = (value, list) => list.includes(value);

export const isValidLength = (value, minLength) => value.length >= minLength;

export const isSameStation = (prevStation, nextStation) =>
  prevStation === nextStation;

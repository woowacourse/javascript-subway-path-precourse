export function createResultPathMessage(pathArray) {
  return pathArray.join('->');
}

export function createDistanceMessage(distance) {
  return `${distance}km`;
}

export function createTimeMessage(time) {
  return `${time}분`;
}

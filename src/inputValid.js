export function isNameShort(name) {
  return (name<2);
}

export function isStationAvaliable(name, data) {
  let result = false;
  for (let i=0; i<data.length; i++) {
    if (data[i].stations.includes(name)) {
      result = true;
      break;
    }
  }
  return result;
}

export function areStationsDifferent(departure, arrival) {
  return (departure!==arrival);
}

export function areStationsLinked(object) {
  return (object.path!==false);
}

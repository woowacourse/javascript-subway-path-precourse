import { lines } from "../datas/data.js";
import { message, value } from "../constants/constant.js";

class util {
  linesDFS = startNode => {
    let visited = [];
    let stack = [startNode];
    while (stack.length > 0) {
      const node = stack.pop();
      if (!visited.includes(node)) {
        const extend = lines[node].map(line => line[value.LINE_NODE_INDEX]);
        stack = stack.concat(extend);
        visited.push(node);
      }
    }

    return visited;
  };

  isEnoughLength = (departure, arrival) => {
    if (
      departure.length < value.STATION_NAME_MIN_LENGTH ||
      arrival.length < value.STATION_NAME_MIN_LENGTH
    ) {
      return message.ALERT_NOT_ENOUGH_LENGTH;
    }

    return null;
  };

  isDiffrentName = (departure, arrival) => {
    if (departure === arrival) {
      return message.ALERT_NAME_EQUAL;
    }

    return null;
  };

  isAvailable = (departure, arrival) => {
    const stations = Object.keys(lines);
    if (!(stations.includes(departure) && stations.includes(arrival))) {
      return message.ALERT_NOT_IN_STATIONS;
    }

    return null;
  };

  isConnected = (departure, arrival) => {
    const visited = this.linesDFS(departure);
    if (!visited.includes(arrival)) {
      return message.ALERT_NOT_CONNECTED_STATION;
    }

    return null;
  };
}

export const {
  isEnoughLength,
  isDiffrentName,
  isAvailable,
  isConnected,
} = new util();

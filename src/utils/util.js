import { stations, lines } from "../datas/data.js";
import { message } from "../constants/constant.js";

class util {
  linesDfs = startNode => {
    let visited = [];
    let stack = [startNode];
    while (stack.length > 0) {
      const node = stack.pop();
      if (!visited.includes(node)) {
        visited.push(node);
        lines[node].forEach(line => {
          stack.push(line[0]);
        });
      }
    }

    return visited;
  };

  isEnoughLength = (departure, arrival) => {
    if (departure.length < 2 || arrival.length < 2) {
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
    if (!(stations.includes(departure) && stations.includes(arrival))) {
      return message.ALERT_NOT_IN_STATIONS;
    }

    return null;
  };

  isConnected = (departure, arrival) => {
    const visited = this.linesDfs(departure);
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

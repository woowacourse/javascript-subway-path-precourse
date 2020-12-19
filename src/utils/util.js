import { stations } from "../datas/data.js"
import { message } from "../constants/constant.js";

class util {
  isEnoughLength = (departure, arrival) => {
    if (departure.length < 2 || arrival.length < 2) {
      return message.ALERT_NOT_ENOUGH_LENGTH;
    }

    return null;
  };

  isDiffrentName = (departure, arrival) => {
    if (departure === arrival) => {
      return message.ALERT_NAME_EQUAL;
    }

    return null;
  };

  isAvailable = (departure, arrival) => {
    if (!(stations.includes(departure) && stations.includes(arrival))){
        return message.ALERT_NOT_IN_STATIONS;
    }

    return null;
  };
  
}

export const {isEnoughLength, isDiffrentName} = new util();

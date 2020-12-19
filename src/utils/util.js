import { message } from "../constants/constant";

class util {
  isEnoughLength = (departure, arrival) => {
    if (departure.length < 2 || arrival.length < 2) {
      return message.ALERT_NOT_ENOUGH_LENGTH;
    }
  };

  isDiffrentName = (departure, arrival) => {
    if (departure === arrival) => {
      return message.ALERT_NAME_EQUAL;
    }
  };

}

export const {isEnoughLength, isDiffrentName} = new util();

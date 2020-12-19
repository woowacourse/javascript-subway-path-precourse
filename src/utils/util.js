import { message } from "../constants/constant";

class util {
  isEnoughLength = (departure, arrival) => {
    if (departure.length < 2 || arrival.length < 2) {
      return message.ALERT_NOT_ENOUGH_LENGTH;
    }
  };
}

export const {} = new util();

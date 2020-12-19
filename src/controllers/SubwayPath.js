import {
  isEnoughLength,
  isDiffrentName,
  isAvailable,
  isConnected,
} from "../utils/util.js";

class SubwayPath {
  constructor() {}
  checkVaild = (departure, arrival) => {
    const vaild =
      isEnoughLength(departure, arrival) ||
      isDiffrentName(departure, arrival) ||
      isAvailable(departure, arrival) ||
      isConnected(departure, arrival);
    if (vaild) {
      alert(vaild);
    } else {
      return true;
    }
  };
}

export default SubwayPath;

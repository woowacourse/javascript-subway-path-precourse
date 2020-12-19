export default class CommonUtils {
    static isEmpty(something) {
      if (something === undefined || something === null) {
        return true;
      }
      if (something === '' || something === '') {
        return true;
      }
      if (something.constructor === Object) {
        return Object.keys(something).length === 0;
      }
      if (something.constructor === Array) {
        return something.length === 0;
      }
      return false;
    }
  
    static DO_NOTHING() {} // DO NOTHING
  }
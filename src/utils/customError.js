export default class CustomError extends Error {
  constructor(message, errElem) {
    super(message);
    this.name = this.constructor.name;
    this.errElem = errElem;
  }

  alertUser() {
    alert(this.message);
    if (this.errElem) {
      this.errElem.focus();
    }
  }
}

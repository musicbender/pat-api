export default class ExpectedError extends Error {
  constructor(message, desc = null, errorCode = null) {
    super();
    this.message = message;
    this.desc = desc;
    this.errorCode = errorCode
  }
}

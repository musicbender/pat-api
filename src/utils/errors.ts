// type ExpectedErrorType = {
//   message: string,
//   desc?: string,
//   errorCode?: string
// }

// class BaseError {
//   constructor () {
//     Error.apply(this, arguments);
//   }
// }
//
// BaseError.prototype = new Error();

export class ExpectedError extends Error {
  message: string;
  desc?: string;
  errorCode?: string;

  constructor(message: string, desc?: string, errorCode?: string) {
    super();
    this.message = message;
    this.desc = desc;
    this.errorCode = errorCode
  }
}

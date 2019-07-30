export class ExpectedError extends Error {
  message: string;
  desc?: string;
  errorDesc?: string;
  errorCode?: string;

  constructor(message: string, desc?: string, errorCode?: string) {
    super();
    this.message = message;
    this.desc = desc;
    this.errorCode = errorCode
  }
}

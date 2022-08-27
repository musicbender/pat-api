const errors = require('../configs/error-codes.json');

export class ExpectedError extends Error {
  message: string;
  desc?: string;
  errorDesc?: string;
  errorCode?: string;

  constructor(message: string, desc?: string) {
    super(message);
    this.message = errors.hasOwnProperty(message) ? message : 'INTERNAL_ERROR';
    this.desc = desc || errors[this.message].description || errors.INTERNAL_ERROR.description;
    this.name = this.constructor.name;
  }
}

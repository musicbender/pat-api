import * as errors from '../configs/error-codes.json';

export class ExpectedError extends Error {
  message: string;
  desc?: string;
  errorDesc?: string;
  errorCode?: string;
  type?: string;

  constructor(message: string, type?: string, desc?: string) {
    super();

    let validErrors = { ...errors.common };

    if (type && errors[type]) {
      validErrors = { ...validErrors, ...errors[type] };
    }

    this.message = message;
    this.desc = desc || validErrors[message].description || null;
  }
}

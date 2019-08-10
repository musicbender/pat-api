const errors = require('../configs/error-codes.json');

export class ExpectedError extends Error {
  message: string;
  desc?: string;
  errorDesc?: string;
  errorCode?: string;

  constructor(message: string, desc?: string) {
    super();

    console.log(`in err util----&&&`);

    this.message = errors.hasOwnProperty(message) ? message : 'INTERNAL_ERROR';
    this.desc = desc || errors[message].description || errors.INTERNAL_ERROR.description;

    console.log(this.message);
    console.log(this.desc);
    console.log(`----&&&`);
  }
}

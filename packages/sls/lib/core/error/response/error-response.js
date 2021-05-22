import errorObjects from '../error-objects';

class ErrorResponse extends Error {
  constructor(errorObject, errorDetail) {
    super(errorObject.message);
    this.errorObject = errorObject ?? errorObjects.INTERNAL_SERVER_ERROR;
    this.errorDetail = errorDetail ?? 'Error response';
    this.errorLevel = 'error';
  }
}

ErrorResponse.parse = (err) => {
  if (err instanceof ErrorResponse) return { ...err };

  const errorObject = errorObjects.INTERNAL_SERVER_ERROR;
  const errorDetail = `${err}`;

  /* switch (true) {
    case (err.name === ''): {
      errorObject = ...
      errorDetail = ...
      break;
    }
    case (err.name === ' '): {

      break;
    }
    default: {
      errorObject = { ...errorObjects.INTERNAL_SERVER_ERROR };
      errorDetail = `${err}`;
    }
  } */

  return new ErrorResponse(errorObject, errorDetail);
};

export default ErrorResponse;

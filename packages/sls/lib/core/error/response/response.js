import ErrorResponse from './error-response';
import WarningResponse from './warning-response';

const parseErrorResponse = (err) => {
  if (err instanceof ErrorResponse || err instanceof WarningResponse) {
    return { ...err };
  }
  return ErrorResponse.parse(err);
};

export {
  ErrorResponse,
  WarningResponse,
  parseErrorResponse,
};

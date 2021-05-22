import { parseErrorResponse } from './response/response';
import errorObjects from './error-objects';
import logger from '../logger/logger';

export default (err) => {
  const errorResponse = parseErrorResponse(err);
  errorResponse.stack = err.stack;

  logger[errorResponse.errorLevel]({ errorResponse });

  return {
    errorObject: errorResponse,
    response: {
      statusCode: errorResponse.errorObject?.httpCode ?? errorObjects.INTERNAL_SERVER_ERROR.httpCode,
      Error: errorResponse.errorObject?.errorCode ?? errorObjects.INTERNAL_SERVER_ERROR.errorCode,
      Message: errorResponse.errorObject?.message ?? errorObjects.INTERNAL_SERVER_ERROR.message,
    },
  };
};

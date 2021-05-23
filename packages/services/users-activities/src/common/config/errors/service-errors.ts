// @ts-ignore
import { ErrorObjects } from '@sls/lib';
import { IErrorObjects } from '../../assets/types/types';

export default {
  ...ErrorObjects as IErrorObjects, // not working until fix @sls/lib to typescript, copying code instead
  INTERNAL_SERVER_ERROR: { errorCode: 1000, httpCode: 500, message: 'Internal server error, please try again later or contact the support' },
  WRONG_PARAMETERS: { errorCode: 1001, httpCode: 400, message: 'Wrong parameters, please check the request' },
  NOT_FOUND: { errorCode: 1002, httpCode: 404, message: 'Resource not found' },
  ALREADY_EXISTS: { errorCode: 1003, httpCode: 409, message: 'Resource already exists' },
};

import { ErrorObjects } from '@sls/lib';

export default {
  ...ErrorObjects,
  SOME_COMMON_ERROR: { errorCode: 9999, httpCode: 500, message: 'Some new common error object' },
};

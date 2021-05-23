// @ts-ignore
import { ErrorObjects } from '@sls/lib';

interface IerrorObjects {
  [errorName: string] : {
    errorCode: number,
    httpCode: number,
    message: string
  }
}

export default {
  ...ErrorObjects as IerrorObjects,
  SOME_COMMON_ERROR: { errorCode: 9999, httpCode: 500, message: 'Some new common error object' },
};

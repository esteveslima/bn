/* eslint-disable prefer-rest-params */
import 'source-map-support/register';
import { logger, middleware } from '../../../core/core';
import parseRequest from './utils/parse-request';
import parseResponse from './utils/parse-response';

export default (func) => async function lambda() {
  const { IS_OFFLINE } = process.env;

  middleware.before((args) => { if (!IS_OFFLINE) logger.info(args); });
  middleware.after((args, result) => { if (!IS_OFFLINE) logger.info(result); });
  middleware.error((args, errorObject) => { if (!IS_OFFLINE) logger.error('Custom middleware for errors'); });

  const args = parseRequest(arguments);

  const result = await middleware.resolve(func, args);

  return parseResponse(result);
};

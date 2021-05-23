import logger from '../logger/logger';
import { errorHandler } from '../error/error';

export default (function middleware() {
  const queue = {
    before: [],
    after: [],
    error: [],
  };

  const run = {
    async before(functionArgs) {
      await Promise.all(
        queue.before.map(async (func) => {
          const middlewareResult = await func(functionArgs);
        }),
      );
    },
    async after(functionArgs, functionResult) {
      await Promise.all(
        queue.after.map(async (func) => {
          try {
            const middlewareResult = await func(functionResult, functionArgs);
          } catch (middlewareError) {
            logger.error(`Silent Middleware Error: ${middlewareError.stack}`);
          }
        }),
      );
    },
    async error(functionArgs, errorObject) {
      await Promise.all(
        queue.error.map(async (func) => {
          try {
            const middlewareResult = await func(errorObject, functionArgs);
          } catch (middlewareError) {
            logger.error(`Silent Middleware Error: ${middlewareError.stack}`);
          }
        }),
      );
    },
  };

  return {
    async resolve(func, args) {
      try {
        await run.before(...args);
        const functionResult = await func.apply(this, args);
        await run.after(functionResult, ...args);

        return functionResult;
      } catch (error) {
        const handledError = errorHandler(error);
        await run.error(handledError.errorObject, ...args);
        return handledError.response;
      }
    },

    before(func) { return typeof func === 'function' && queue.before.push(func); },
    after(func) { return typeof func === 'function' && queue.after.push(func); },
    error(func) { return typeof func === 'function' && queue.error.push(func); },
  };
}());

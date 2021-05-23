// @ts-ignore
import { lambda, logger, middleware } from '@sls/lib';
import { APIGatewayEvent } from 'aws-lambda';

middleware.before((event : APIGatewayEvent) => { logger.log('middleware usage example'); });

export default lambda(async (event : APIGatewayEvent & { body : object }) => {
  // const { params } = event.body;
  logger.log(1);
  return {
    result: 'params',
  };
});

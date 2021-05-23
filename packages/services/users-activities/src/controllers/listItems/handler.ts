// @ts-ignore
import { lambda, logger, middleware } from '@sls/lib';
import { SlsAPIGatewayEvent } from '../../common/assets/types/types';
import * as inputSchemas from './assets/input-schemas';
import validate from '../../common/utils/validation';
import * as activitiesDao from '../../common/database/dao/activities-dao';

middleware.before((event : SlsAPIGatewayEvent) => {
  const isPathValid = validate(event.pathParameters, inputSchemas.path);
});

export default lambda(async (event : SlsAPIGatewayEvent) => {
  const { userName } = event.pathParameters;

  const resultList = await activitiesDao.listActivities(userName);

  return { result: resultList };
});

// @ts-ignore
import { lambda, logger, middleware } from '@sls/lib';
import { SlsAPIGatewayEvent, IActivityModel } from '../../common/assets/types/types';
import * as inputSchemas from './assets/input-schemas';
import validate from '../../common/utils/validation';
import * as activitiesDao from '../../common/database/dao/activities-dao';

middleware.before((event : SlsAPIGatewayEvent) => {
  const isBodyValid = validate(event.body, inputSchemas.body);
  const isPathValid = validate(event.pathParameters, inputSchemas.path);
});

export default lambda(async (event : SlsAPIGatewayEvent) => {
  const { userName, itemName } = event.pathParameters;
  const payload = event.body as IActivityModel;

  const resultUpdate = await activitiesDao.updateActivity(userName, itemName, payload);

  return { result: `Activity '${itemName}' successfully updated for user ${userName} ` };
});

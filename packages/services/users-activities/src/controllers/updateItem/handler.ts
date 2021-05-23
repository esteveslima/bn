// @ts-ignore
import { lambda, logger, middleware } from '@sls/lib';
import { SlsAPIGatewayEvent, IActivityModel } from '../../common/config/types/types';
import * as activitiesDao from '../../common/database/dao/activities-dao';

export default lambda(async (event : SlsAPIGatewayEvent) => {
  const { userName, itemName } = event.pathParameters;
  const payload = event.body as IActivityModel;

  const resultUpdate = await activitiesDao.updateActivity(userName, itemName, payload);

  return { result: `Activity '${itemName}' successfully updated for user ${userName} ` };
});

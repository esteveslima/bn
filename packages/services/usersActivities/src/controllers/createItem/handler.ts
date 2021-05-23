// @ts-ignore
import { lambda, logger, middleware } from '@sls/lib';
import { SlsAPIGatewayEvent, IActivityModel } from '../../common/config/types/types';
import * as activitiesDao from '../../common/database/dao/activities-dao';

export default lambda(async (event : SlsAPIGatewayEvent) => {
  const { userName } = event.pathParameters;
  const payload = event.body as IActivityModel;
  const itemName = payload.name;

  const resultCreate = await activitiesDao.createActivity(userName, itemName, payload);

  return { result: `Activity '${itemName}' successfully created for user ${userName} ` };
});

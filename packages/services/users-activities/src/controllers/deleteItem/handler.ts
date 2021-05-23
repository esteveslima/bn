// @ts-ignore
import { lambda, logger, middleware } from '@sls/lib';
import { SlsAPIGatewayEvent } from '../../common/config/types/types';
import * as activitiesDao from '../../common/database/dao/activities-dao';

export default lambda(async (event : SlsAPIGatewayEvent) => {
  const { userName, itemName } = event.pathParameters;

  const resultDelete = await activitiesDao.deleteActivity(userName, itemName);

  return { result: `Activity '${itemName}' successfully deleted for user ${userName} ` };
});

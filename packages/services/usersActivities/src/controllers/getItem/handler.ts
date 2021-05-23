// @ts-ignore
import { lambda, logger, middleware } from '@sls/lib';
import { SlsAPIGatewayEvent } from '../../common/config/types/types';
import * as activitiesDao from '../../common/database/dao/activities-dao';

export default lambda(async (event : SlsAPIGatewayEvent) => {
  const { userName, itemName } = event.pathParameters;

  const resultGet = await activitiesDao.getActivity(userName, itemName);

  return resultGet;
});

// @ts-ignore
import { ErrorResponse } from '@sls/lib';
import redisClient from '../../config/redis-client';
import { IActivityModel } from '../../../config/types/types';
import ErrorObjects from '../../../config/errors/service-errors';

export default async (userName : string, itemName : string) : Promise<IActivityModel> => {
  const key = userName;
  const field = itemName;

  const getResult : string = await new Promise((resolve, reject) => redisClient.hget(key, field, (err, data) => {
    if (err) reject(err); else resolve(data);
  }));

  const itemFound = !!getResult;
  if (!itemFound) throw new ErrorResponse(ErrorObjects.NOT_FOUND, getResult);

  const result : IActivityModel = JSON.parse(getResult);
  return result;
};

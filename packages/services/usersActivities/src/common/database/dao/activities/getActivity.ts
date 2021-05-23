// @ts-ignore
import { ErrorResponse } from '@sls/lib';
import redisClient from '../../config/redis-client';
import { IActivityModel } from '../../../config/types/types';
import ErrorObjects from '../../../config/errors/service-errors';

export default async (userName : string, itemName : string) : Promise<IActivityModel> => {
  const key = userName;
  const field = itemName;

  return new Promise((resolve, reject) => redisClient.hget(key, field, (err, data) => {
    if (err) reject(err);
    if (!data) reject(new ErrorResponse(ErrorObjects.NOT_FOUND, data));

    resolve(JSON.parse(data));
  }));
};

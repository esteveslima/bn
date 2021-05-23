// @ts-ignore
import { ErrorResponse } from '@sls/lib';
import redisClient from '../../config/redis-client';
import { IActivityModel } from '../../../config/types/types';
import ErrorObjects from '../../../config/errors/service-errors';

export default async (userName : string, itemName : string, payload : IActivityModel) : Promise<boolean> => {
  const key = userName;
  const field = itemName;
  const value = JSON.stringify(payload);

  const fieldExists = await new Promise((resolve, reject) => redisClient.hexists(key, field, (err, data) => {
    if (err) reject(err);
    if (!data) reject(new ErrorResponse(ErrorObjects.NOT_FOUND, data));

    resolve(true);
  }));

  return new Promise((resolve, reject) => redisClient.hset(key, field, value, (err, data) => {
    if (err) reject(err);

    resolve(true);
  }));
};

// @ts-ignore
import { ErrorResponse } from '@sls/lib';
import redisClient from '../../config/redis-client';
import { IActivityModel } from '../../../config/types/types';
import ErrorObjects from '../../../config/errors/service-errors';

export default async (userName : string, itemName : string, payload : IActivityModel) : Promise<boolean> => {
  const key = userName;
  const field = itemName;
  const value = JSON.stringify(payload);

  return new Promise((resolve, reject) => redisClient.hsetnx(key, field, value, (err, data) => {
    if (err) reject(err);
    if (!data) reject(new ErrorResponse(ErrorObjects.ALREADY_EXISTS, data));

    resolve(true);
  }));
};

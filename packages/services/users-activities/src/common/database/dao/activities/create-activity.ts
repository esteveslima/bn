// @ts-ignore
import { ErrorResponse } from '@sls/lib';
import redisClient from '../../config/redis-client';
import { IActivityModel } from '../../../assets/types/types';
import ErrorObjects from '../../../config/errors/service-errors';

export default async (userName : string, itemName : string, payload : IActivityModel) : Promise<boolean> => {
  const key = userName;
  const field = itemName;
  const value = JSON.stringify(payload);

  const createResult : boolean = await new Promise((resolve, reject) => redisClient.hsetnx(key, field, value, (err, data) => {
    if (err) reject(err); else resolve(!!data);
  }));

  if (!createResult) throw new ErrorResponse(ErrorObjects.ALREADY_EXISTS, createResult);

  return createResult;
};

// @ts-ignore
import { ErrorResponse } from '@sls/lib';
import redisClient from '../../config/redis-client';
import { IActivityModel } from '../../../assets/types/types';
import ErrorObjects from '../../../config/errors/service-errors';

export default async (userName : string, itemName : string, payload : IActivityModel) : Promise<boolean> => {
  const key = userName;
  const field = itemName;
  const value = JSON.stringify({ ...payload, name: itemName });

  const fieldExists : boolean = await new Promise((resolve, reject) => redisClient.hexists(key, field, (err, data) => {
    if (err) reject(err); else resolve(!!data);
  }));

  if (!fieldExists) throw new ErrorResponse(ErrorObjects.NOT_FOUND, fieldExists);

  const updateResult : number = await new Promise((resolve, reject) => redisClient.hset(key, field, value, (err, data) => {
    if (err) reject(err); else resolve(data);
  }));

  if (updateResult > 0) throw new ErrorResponse(ErrorObjects.INTERNAL_SERVER_ERROR, `No fields should had been added, fields added: ${updateResult}`);

  return true;
};

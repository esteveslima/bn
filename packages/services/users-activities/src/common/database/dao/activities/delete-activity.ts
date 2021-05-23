// @ts-ignore
import { ErrorResponse } from '@sls/lib';
import redisClient from '../../config/redis-client';
import ErrorObjects from '../../../config/errors/service-errors';

export default async (userName : string, itemName : string) : Promise<boolean> => {
  const key = userName;
  const field = itemName;

  const deleteResult : boolean = await new Promise((resolve, reject) => redisClient.hdel(key, field, (err, data) => {
    if (err) reject(err); else resolve(!!data);
  }));

  if (!deleteResult) throw new ErrorResponse(ErrorObjects.NOT_FOUND, deleteResult);

  return deleteResult;
};

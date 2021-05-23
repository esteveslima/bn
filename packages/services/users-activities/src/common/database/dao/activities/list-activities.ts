// @ts-ignore
import { ErrorResponse } from '@sls/lib';
import redisClient from '../../config/redis-client';
import { IActivityModel } from '../../../assets/types/types';
import ErrorObjects from '../../../config/errors/service-errors';

interface IActivityModelList {
  [index: number]: IActivityModel
}

export default async (userName : string) : Promise<IActivityModelList> => {
  const key = userName;

  const activities : object = await new Promise((resolve, reject) => redisClient.hgetall(key, (err, data) => {
    if (err) reject(err); else resolve(data);
  }));

  const resultsFound = !!activities && !!Object.keys(activities).length;
  if (!resultsFound) throw new ErrorResponse(ErrorObjects.NOT_FOUND, activities);

  const activitiesList : IActivityModelList = Object.values(activities).map((activity : string) => JSON.parse(activity));
  return activitiesList;
};

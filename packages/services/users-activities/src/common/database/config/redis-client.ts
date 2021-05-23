import * as redis from 'redis';

export default (() => {
  const { IS_OFFLINE } = process.env;

  return redis.createClient({
    host: IS_OFFLINE ? 'redis-container' : undefined, // only docker host available for offline environment
    port: 6379,
  });
})();

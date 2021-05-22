/* eslint-disable no-console */
const { IS_OFFLINE } = process.env;

export default {
  log: (...data) => {
    console.log(...data);
  },
  info: (...data) => {
    console.info(...data);
  },
  warn: (...data) => {
    console.warn(...data);
  },
  error: (...data) => {
    console.error(...data);
  },
};

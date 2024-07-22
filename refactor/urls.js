const {
  BASE_URL,
  DEV_QUERY_PARAMS,
  NEXT_TASKS_PARAMS,
  PREV_TASKS_PARAMS,
} = require("./constant");

const { getQueryParams } = require("./utils");

const getURL = (dev = false, tasks = {}) => {
  let queryParams = {};

  if (dev) {
    queryParams = { ...queryParams, ...DEV_QUERY_PARAMS };
  }

  if (tasks?.nextTasks) {
    queryParams = { ...queryParams, ...NEXT_TASKS_PARAMS };
  }

  if (tasks?.prevTasks) {
    queryParams = { ...PREV_TASKS_PARAMS };
  }

  const queryString = Object.keys(queryParams).length
    ? getQueryParams(queryParams)
    : false;

  const url = queryString ? `${BASE_URL}?${queryString}` : BASE_URL;

  return { url };
};

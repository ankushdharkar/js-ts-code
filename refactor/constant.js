const BASE_URL = "/tasks";
const DEV_QUERY_PARAMS = { status: "ACTIVE", dev: true, size: 20 };
const NEXT_TASKS_PARAMS = { hasNext: true };
const PREV_TASKS_PARAMS = { hasPrev: true };

module.exports = {
  BASE_URL,
  DEV_QUERY_PARAMS,
  NEXT_TASKS_PARAMS,
  PREV_TASKS_PARAMS,
};

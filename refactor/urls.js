
function buildURL(isDev = false, taskFlags = {}) {
  const baseEndpoint = "/tasks";
  const queryParams = new URLSearchParams();

  if (isDev) {
    queryParams.append("status", "ACTIVE");
    queryParams.append("dev", "true");
    queryParams.append("size", "20");
  }

  if (taskFlags.nextTasks) {
    queryParams.append("hasNext", "true");
  }

  if (taskFlags.prevTasks) {
    queryParams.set("hasPrev", "true");
  }

  const queryString = queryParams.toString();

  const finalURL = queryString
    ? `${baseEndpoint}?${queryString}`
    : baseEndpoint;

  return { url: finalURL };
}

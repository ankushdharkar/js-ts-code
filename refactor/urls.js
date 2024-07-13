/**
 * Constructs a URL based on the provided parameters.
 * @param {boolean} dev - Indicates if the development mode is enabled.
 * @param {Object} tasks - An object containing information about tasks.
 * @returns {Object} An object containing the constructed URL.
 */
function getURL(dev = false, tasks = {}) {
  const baseURL = "/tasks";
  const params = new URLSearchParams(baseURL);
  if (dev) {
    params.append("STATUS", "ACTIVE");
    params.append("dev", true);
    params.append("size", 20);
  }
  if (tasks.nextTasks) {
    params.append("hasNext", true);
  }

  if (tasks.prevTasks) {
    params.append("hasPrev", true);
  }

  const query = params.toString() ?? "";

  const url = baseURL + (query.length > 0 ? "?" + query : "");

  return { url };
}

function getURL(dev = false, tasks = {}) {
  const baseURL = "/tasks";
  const url = new URLSearchParams(baseURL);
  if (dev) {
    url.append("STATUS", "ACTIVE");
    url.append("dev", true);
    url.append("size", 20);
  }
  if (tasks.nextTasks) {
    url.append("hasNext", true);
  }

  if (tasks.prevTasks) {
    url.append("hasPrev", true);
  }

  const query = url.toString() ?? "";

  const urlWithQuery = baseURL + (query.length > 0 ? "?" + query : "");

  return urlWithQuery;
}

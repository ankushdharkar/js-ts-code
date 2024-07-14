function getURL(dev = false, tasks = {}) {
  let baseURL = "/tasks";
  const params = new URLSearchParams();

  if (dev) {
    params.append("status", "ACTIVE");
    params.append("dev", true);
    params.append("size", 20);
  }

  if (tasks.nextTasks) {
    params.append("hasNext", "true");
  }

  if (tasks.prevTasks) {
    params.append("hasPrev", "true");
  }

  const queryString = params.toString();
  return { url: queryString ? `${baseURL}?${queryString}` : baseURL };
}

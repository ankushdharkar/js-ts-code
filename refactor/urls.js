// Refactor this code

function getUrl(dev = false, tasks = {}) {
  const params = new URLSearchParams();

  if (dev) {
    params.append("status", "ACTIVE");
    params.append("dev", true);
    params.append("size", 20);
  }

  if (tasks) {
    if (tasks.nextTasks) {
      params.append("hasNext", true);
    }
    if (tasks.prevTasks) {
      params.append("hasPrev", true);
    }
  }

  const queryString = params.toString();
  const url = queryString ? `/tasks?${queryString}` : "/tasks";

  return { url };
}

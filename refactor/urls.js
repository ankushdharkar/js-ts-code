// Refactor this code

function getUrl(dev = false, tasks = {}) {
  const params = new URLSearchParams();
  let url = "/tasks";

  if (dev) {
    params.append("status", "ACTIVE");
    params.append("dev", true);
    params.append("size", 20);
  }

  if (!tasks || Object.keys(tasks).length === 0) {
    url += (url.includes("?") ? "&" : "?") + params.toString();
    return { url };
  }
  if (tasks.nextTasks) {
    params.append("hasNext", true);
  }
  if (tasks.prevTasks) {
    params.append("hasPrev", true);
  }

  url += (url.includes("?") ? "&" : "?") + params.toString();

  return { url };
}

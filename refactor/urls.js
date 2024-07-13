function getURL(dev = false, tasks = {}) {
  let url = "/tasks";

  let params = new URLSearchParams();
  if (dev) {
    params.append("status", "ACTIVE");
    params.append("dev", "true");
    params.append("size", "20");
  }

  if (tasks.nextTasks) {
    params.append("hasNext", "true");
  }

  if (tasks.prevTasks) {
    params.append("hasPrev", "true");
  }
  url += `?${params.toString()}`;
  return { url };
}

console.log(getURL(false, {}));

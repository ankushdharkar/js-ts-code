// Refactor this code

function getURL(dev = false, { nextTasks, prevTasks } = {}) {
  let url = "/tasks";
  let params = new URLSearchParams();

  if (dev) {
    params.append("status", "ACTIVE");
    params.append("dev", true);
    params.append("size", 20);
  }
  if (nextTasks) params.append("hasNext", true);
  if (prevTasks) params.append("hasPrev", true);

  return { url: `${url}?${params.toString()}` };
}

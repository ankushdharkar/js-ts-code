// Refactor this code

function getURL(dev = false, { nextTasks, prevTasks } = {}) {
  const params = new URLSearchParams();

  if (dev) {
    params.set("status", "ACTIVE");
    params.set("dev", "true");
    params.set("size", "20");
  }

  if (nextTasks) params.set("hasNext", "true");
  if (prevTasks) params.set("hasPrev", "true");

  const query = params.toString();
  return { url: `/tasks${query ? `?${query}` : ""}` };
}

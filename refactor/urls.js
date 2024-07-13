//Refactor the code
function getURL(dev = false, tasks = {}) {
  const { prevTasks = false, nextTasks = false } = tasks;
  const baseUrl = "/tasks";
  const params = {
    status: "ACTIVE",
    dev: "true",
    size: "20",
  };
  const queryParams = new URLSearchParams(dev ? params : {});
  if (nextTasks) {
    queryParams.append("hasNext", "true");
  }
  if (prevTasks) {
    queryParams.append("hasPrev", "true");
  }
  const url = queryParams.toString()
    ? `${baseUrl}?${queryParams.toString()}`
    : baseUrl;
  return { url };
}

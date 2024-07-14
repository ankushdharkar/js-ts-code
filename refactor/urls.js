// Refactor this code

function getURL(dev = false, tasks = {}) {
  var url = "/tasks";
  var params = new URLSearchParams();
  if (dev) {
    params.append("status", "ACTIVE");
    params.append("dev", "true");
    params.append("size", "20");
  }

  if (tasks.nextTasks) {
    params.append("hasNext", "true");
  }

  if (tasks.prevTasks) {
    params = new URLSearchParams();
    params.append("hasPrev", "true");
  }

  if (params.size > 0) {
    url += "?" + params.toString();
  }

  return { url };
}

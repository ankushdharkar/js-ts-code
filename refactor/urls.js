// Refactor this code

function getURL(dev = false, tasks = {}) {
  let url = "/tasks";

  //   let url = dev ? `/tasks?status=ACTIVE&dev=true&size=20` : "/tasks";
  let params = new URLSearchParams();
  if (dev) {
    // url += "?status=ACTIVE&dev=dev&size=20";
    params.append("status", "ACTIVE");
    params.append("dev", "true");
    params.append("size", "20");
  }

  if (tasks.nextTasks) {
    // url += "?hasNext=true";
    params.append("hasNext", "true");
  }

  if (tasks.prevTasks) {
    // url += "?hasPrev=true";
    params.append("hasPrev", "true");
  }
  url += `?${params.toString()}`;
  return { url };
}

console.log(getURL(false, {}));

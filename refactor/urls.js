function getURL(dev = false, tasks = {}) {
  let url = "/tasks";

  let devURL = "/tasks?status=ACTIVE&dev=true&size=20";
  if (dev) {
    url = devURL;
  }

  if (tasks.nextTasks) {
    url += url.includes("?") ? "&" : "?";
    url += "hasNext=true";
  }

  if (tasks.prevTasks) {
    url = "/tasks?hasPrev=true";
  }

  return { url };
}

// const ans = getURL(true, { nextTasks: true ,prevTasks:true});

// console.log(ans);

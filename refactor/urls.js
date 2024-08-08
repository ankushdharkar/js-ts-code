const getDevURL = (dev, prevTasks) => {
  return dev && !prevTasks ? "?status=ACTIVE&dev=true&size=20" : "";
};

const getNextTasksURL = (dev, nextTasks) => {
  return nextTasks ? `${dev ? "&" : "?"}hasNext=true` : "";
};

const getprevTasksURL = (prevTasks) => {
  return prevTasks ? "?hasPrev=true" : "";
};

function getURL(dev = false, { nextTasks, prevTasks } = {}) {
  const BASE_URL = "/tasks";
  return {
    url:
      BASE_URL +
      getDevURL(dev, prevTasks) +
      getNextTasksURL(dev, nextTasks) +
      getprevTasksURL(prevTasks),
  };
}

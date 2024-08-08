function setDevParams(searchParams) {
  searchParams.set("status", "ACTIVE");
  searchParams.set("dev", true);
  searchParams.set("size", 20);
}

function setNextTasksParams(searchParams) {
  searchParams.set("hasNext", true);
}

function setPrevTasksParams(searchParams) {
  searchParams = new URLSearchParams({ hasPrev: true });
}

function getURL(dev = false, tasks = {}) {
  let url = new URL("https://tasks");

  if (dev) setDevParams(url.searchParams);
  if (tasks.nextTasks) setNextTasksParams(url.searchParams);
  if (tasks.prevTasks) setPrevTasksParams(url.searchParams);

  return { url: url.toString().slice(7) };
}

function getURL(dev = false, tasks = {}) {
  try {
    const baseUrl = "/tasks";
    const params = new URLSearchParams();

    if (dev === true) {
      params.append("status", "ACTIVE");
      params.append("dev", "true");
      params.append("size", "20");
    }

    if (tasks.nextTasks === true) {
      params.append("hasNext", "true");
    }

    if (tasks.prevTasks === true) {
      params.append("hasPrev", "true");
    }

    let url = baseUrl;
    if (params.size > 0) {
      url += "?" + params.toString();
    }

    return { url };
  } catch (error) {
    console.error("Error in getURL function:", error);
    return { url: "/tasks", error: "Failed to generate URL" };
  }
}

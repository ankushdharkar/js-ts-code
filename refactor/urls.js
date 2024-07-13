// Refactor this code

function getURL(dev = false, tasks = {}) {
    const urlParams = new URLSearchParams();
    const baseUrl = "/tasks";
    if(dev) {
        urlParams.append("status", "ACTIVE");
        urlParams.append("dev", "true");
        urlParams.append("size", "20");
    }

    if (tasks.nextTasks) {
        urlParams.append("hasNext", "true");
    }

    if (tasks.prevTasks) {
        urlParams.append("hasPrev", "true");
    }
    let url = baseUrl;
    if(urlParams.size > 0) {
        url += "?" + urlParams.toString();
    }
    return { url };
}
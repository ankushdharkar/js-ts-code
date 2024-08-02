const TASKS_BASE_ENDPOINT = "/tasks";
const DEFAULT_TASKS_PARAMS = {
    status: "ACTIVE",
    size: 20,
};

function getURL(dev = false, tasks = {}, params = DEFAULT_TASKS_PARAMS) {
    const { nextTasks = false, prevTasks = false } = tasks;
    const { status, size } = params;

    let url = TASKS_BASE_ENDPOINT;
    if (dev)
        url = `${TASKS_BASE_ENDPOINT}?status=${status}&dev=${dev}&size=${size}`;

    if (nextTasks) url += "?hasNext=true";
    if (prevTasks) url = `${TASKS_BASE_ENDPOINT}?hasPrev=true`;

    return { url };
}

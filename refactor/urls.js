const TASKS_BASE = "/tasks";

function getURL(dev = false, tasks = {}, params) {
    const { nextTasks, prevTasks } = tasks;

    let url = TASKS_BASE;
    const queryParams = new URLSearchParams({
        ...params
    });
    const stringParams = queryParams.toString();

    if (dev) url += `?${stringParams}`;
    if (nextTasks) url += `${stringParams ? "&" : "?"}hasNext=true`;
    if (prevTasks) url += `${stringParams ? "&" : "?"}hasPrev=true`;

    return { url };
}

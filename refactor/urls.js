let url = "/tasks";
const defaultParams = {
    status: ACTIVE,
    dev: true,
    size: 20
}

function getURL(dev = false, tasks = {}, params = defaultParams) {
    const { nextTasks = false, prevTasks = false } = tasks;

    const queryParams = new URLSearchParams({
        ...params
    });
    const stringParams = queryParams.toString();

    if (dev) {
        url += `?${stringParams}`
    }

    // update accordingly in case of any tasks is true
    if (nextTasks) {
        url += `${stringParams ? "&" : "?"}hasNext=true`
    }
    if (prevTasks) {
        url += `${stringParams ? "&" : "?"}hasPrev=true`;
    }

    return { url };
}

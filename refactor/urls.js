// Refactor this code

function getURL(dev = false, tasks = {}) {
    let url = dev
        ? `/tasks?status=ACTIVE&dev=true&size=20`
        : '/tasks';
    const checkQueryString=url.includes('?');
    if (tasks.nextTasks) {
        url += checkQueryString ? "&hasNext=true" : "?hasNext=true";
    }
    if (tasks.prevTasks) {
        url = '/tasks?hasPrev=true';
    }
    return { url };
}

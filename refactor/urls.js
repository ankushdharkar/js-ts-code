// Refactor this code

function getURL(dev = false, tasks = {}) {
    let url = dev
        ? `/tasks?status=ACTIVE&dev=true&size=20`
        : '/tasks';
    if (tasks.nextTasks) {
        url+= dev ? '&' : '?';
        url+= 'hasNext=true';
    }

    if (tasks.prevTasks) {
        url = '/tasks?hasPrev=true';
    }
    return { url };
}

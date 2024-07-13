// Refactor this code

function getURL(dev = false, tasks = {}) {
    let url = '/tasks';
    if (dev) {
        url += `?status=ACTIVE&dev=true&size=20`;
    }

    if (tasks.nextTasks) {
        url += (url.includes('?') ? '&' : '?') + 'hasNext=true';
    }

    if (tasks.prevTasks) {
        url += (url.includes('?') ? '&' : '?') + 'hasPrev=true';
    }
    return { url };
}

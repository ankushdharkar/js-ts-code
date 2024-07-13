// Refactor this code

function getURL(dev = false, tasks = {}) {
    const baseURL = '/tasks';
    const params = new URLSearchParams();

    if (dev) {
        params.append('status', 'ACTIVE');
        params.append('dev', 'true');
        params.append('size', '20');
    }

    if (tasks.nextTasks) {
        params.append('hasNext', 'true');
    }

    if (tasks.prevTasks) {
        params.set('hasPrev', 'true');
    }

    const queryString = params.toString();
    const url = queryString ? `${baseURL}?${queryString}` : baseURL;

    return { url };
}

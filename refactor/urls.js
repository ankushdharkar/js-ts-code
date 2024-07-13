// Refactor this code

function getURL(dev = false, tasks = {}) {
    const baseUrl = '/tasks';
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
    const url = queryString ? `${baseUrl}?${queryString}` : baseUrl;

    return { url };
}
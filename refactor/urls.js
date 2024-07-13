// Refactor this code

/**
 * Constructs a URL for fetching tasks with optional query parameters.
 *
 * @param {boolean} [dev=false] - Indicates if the development mode is active.
 * @param {Object} [tasks={}] - An object containing task-related flags.
 * @param {boolean} [tasks.nextTasks=false] - Flag indicating if there are next tasks.
 * @param {boolean} [tasks.prevTasks=false] - Flag indicating if there are previous tasks.
 * @returns {Object} An object containing the constructed URL.
 */ 
function getURL(dev = false, tasks = { nextTasks = false, prevTasks = false } = {}) {
    const baseUrl = '/tasks';
    const params = new URLSearchParams();

    if (dev) {
        params.append('status', 'ACTIVE');
        params.append('dev', 'true');
        params.append('size', '20');
    }

    if (nextTasks) {
        params.set('hasNext', 'true')
    } else if (prevTasks) {
        params.set('hasPrev', 'true')
    }

    const queryString = params.toString();
    const url = queryString ? `${baseUrl}?${queryString}` : baseUrl;

    return { url };
}

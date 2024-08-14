// this is refactored code
interface Tasks {
    nextTasks?: boolean;
    prevTasks?: boolean;
}

function getURL(dev: boolean = false, tasks: Tasks = {}): string {
    let queryParams: string[] = [];

    if (dev) {
        queryParams.push('status=ACTIVE', 'dev=true', 'size=20');
    }

    if (tasks.nextTasks) {
        queryParams.push('hasNext=true');
    }

    if (tasks.prevTasks) {
        queryParams.push('hasPrev=true');
    }

    let queryString = queryParams.length ? '?' + queryParams.join('&') : '';
    return '/tasks' + queryString;
}

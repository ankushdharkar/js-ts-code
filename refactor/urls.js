// Refactor this code

function getURL(dev = false, tasks) {
    let url = dev
        ? `/tasks?status=ACTIVE&dev=true&size=20`
        : '/tasks';

    if (tasks.nextTasks) {
        url += '?hasNext=true';
    }

    if (tasks.prevTasks) {
        url += '?hasPrev=true';
        // here we have to remove the `/tasks` because it will right twice time here 
    }
    return url ;
    //here we have to remove the curly braces 
}

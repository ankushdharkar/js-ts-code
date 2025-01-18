// Refactor this code

function getURL(dev = false, tasks = {}) {
    let url = dev
        ? `/tasks?status=ACTIVE&dev=true&size=20`
        : '/tasks';


    if (tasks.nextTasks) {
        url += dev ? '&hasNext=true' : '?hasNext=true';
    }

    if (tasks.prevTasks) {
        //check if url aleardy contains params in case dev:true /tasks.nextTasks:true  and alse keep for case dev:false/tasks.nextTasks:true
        url += url.includes('?') ? '&hasPrev=true' : '?hasPrev=true';
    }
    return { url };
}

// Refactor this code

function getURL(dev = false, tasks = {}) {
    const urlparams = new URLSearchParams();
    if (dev) {
        urlparams.append('status', 'ACTIVE');
        urlparams.append('dev', 'true');
        urlparams.append('size', '20');
    }
    if (tasks.nextTasks) {
        urlparams.append('hasNext', 'true');
    } else if (tasks.prevTasks) {
        urlparams.append('hasPrev', 'true');
    }

    const url = `/tasks?${urlparams.toString()}`;
    return url;
}
    // let url = dev
    //     ? `/tasks?status=ACTIVE&dev=true&size=20`
    //     : '/tasks';

    // if (tasks.nextTasks) {
    //     url += '?hasNext=true';
    // }

    // if (tasks.prevTasks) {
    //     url = '/tasks?hasPrev=true';
    // }
    // return { url };
// }

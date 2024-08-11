// Refactor this code

function getURL(dev = false, tasks = {}) {
    const baseUrl = '/tasks';
    const queryParams = [];

    if(dev){
        queryParams.push('status=ACTIVE','dev=true','size=20')
    }

    if (tasks.nextTasks) {
        queryParams.push('hasNext=true');
    }

    if (tasks.prevTasks) {
        queryParams.length = 0;
        queryParams.push('hasPrev=true');
    }

    const queryString = queryParams.length > 0
                  ? `?${queryParams.join('&')}`
                  : '';
    const url = `${baseUrl}${queryString}`;
    
    return { url };
}

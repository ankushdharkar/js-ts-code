
function getURL(dev = false, tasks = {}) {
    if (tasks?.prevTasks) {
        return { url: '/tasks?hasPrev=true' };
    }
    
    let url = '/tasks'; 
    let params = dev ? { status: "ACTIVE", size: 20, dev } : {};

    if (tasks?.nextTasks) {
        params = { ...params, hasNext: true }
    }

    if (Object.keys(params).length > 0) {
        url += "?" + new URLSearchParams(params).toString();
    }
    
    return { url };
}

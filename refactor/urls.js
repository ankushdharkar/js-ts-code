function getURL(dev = false, tasks = {}) {
    const BASE_URL = '/tasks';
    let url;
    if (tasks.prevTasks) {
        url = `${BASE_URL}?hasPrev=true`;
        return { url };
    }
  
    url = dev 
        ? `${BASE_URL}?status=ACTIVE&dev=true&size=20`
        : BASE_URL;
  
    if (tasks.nextTasks) {
        url += dev ? '&hasNext=true' : '?hasNext=true';
    }
  
    return { url };
  }
  
  
  
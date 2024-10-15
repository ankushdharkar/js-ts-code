function getURL(dev = false, tasks = {}) {
    const BASE_URL = '/tasks';
  
    if (tasks.prevTasks) {
        url = `${BASE_URL}?hasPrev=true`;
        return { url };
    }
  
    let url = dev 
        ? `${BASE_URL}?status=ACTIVE&dev=true&size=20`
        : BASE_URL;
  
    if (tasks.nextTasks) {
        url += dev ? '&hasNext=true' : '?hasNext=true';
    }
  
    return { url };
  }
  
  
  
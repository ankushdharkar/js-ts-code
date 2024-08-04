// Refactor this code 

function getURL(dev = false, tasks = {}) {
  const BASE_TASK_URL = '/tasks';

  if (tasks.prevTasks) return { url: `${BASE_TASK_URL}?hasPrev=true` };

  const params = new URLSearchParams();
  if (tasks.nextTasks) {
    params.set('hasNext', 'true');
  }

  if (dev) {
    params.set('status', 'ACTIVE');
    params.set('dev', 'true');
    params.set('size', '20');
  }

  const url = BASE_TASK_URL + (params.size ? '?' + params.toString() : '');

  return { url };
}

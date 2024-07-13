interface Tasks {
  nextTasks?: boolean;
  prevTasks?: boolean;
}

interface URLResult {
  url: string;
}

function getURL(
  dev: boolean = false,
  tasks: Tasks = {},
  additionalParams: Record<string, string> = {}
): URLResult {
  const BASE_URL = "/tasks";
  const DEV_PARAMS: Record<string, string> = {
    status: "ACTIVE",
    dev: "true",
    size: "20",
  };

  tasks = tasks || {};

  const params = new URLSearchParams();

  if (dev) {
    Object.entries(DEV_PARAMS).forEach(([key, value]) => {
      params.append(key, value);
    });
  }

  if (tasks.nextTasks) {
    params.append("hasNext", "true");
  }

  if (tasks.prevTasks) {
    params.delete("hasNext");
    params.append("hasPrev", "true");
  }

  Object.entries(additionalParams).forEach(([key, value]) => {
    params.append(key, value);
  });

  const url = params.toString() ? `${BASE_URL}?${params.toString()}` : BASE_URL;

  return { url };
}

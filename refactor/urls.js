// Refactor this code

function getURL(dev = false, { nextTasks = false, prevTasks = false } = {}) {
	const baseUrl = "/tasks";
	const params = new URLSearchParams();

	if (dev) {
		params.append("status", "ACTIVE");
		params.append("dev", "true");
		params.append("size", "20");
	}

	if (nextTasks) params.append("hasNext", "true");
	if (prevTasks) params.append("hasPrev", "true");

	const queryString = params.toString();
	const url = queryString ? `${baseUrl}?${queryString}` : baseUrl;
	return { url };
}

function getUrl(dev = false, tasks = {}) {
	let url = dev
		? `/tasks?dev=true&size=20&status=active`
		: `/tasks`;

	if (!tasks) return url;

	if (tasks.nextTasks && tasks.prevTasks) {
		url += `${dev ? '&' : '?'}prev=true&next=true`;
		return url;
	}

	if (tasks.prevTasks) {
		url += `${dev ? '&' : '?'}prev=true`;
	}

	if (tasks.nextTasks) {
		url += `${dev ? '&' : '?'}next=true`;
	}

	return url;
}
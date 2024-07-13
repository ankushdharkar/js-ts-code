// Refactor this code

function getUrl(dev = false, tasks = {}) {
	let url = dev
		? `/tasks?status=active&size=20&dev=${dev}`
		: `/tasks`;

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

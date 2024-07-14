function getURL(dev = false, tasks = {}) {
	if (typeof dev !== "boolean") {
		throw new Error("Invalid type for dev parameter")
	}
	if (typeof tasks !== "object") {
		throw new Error("Invalid type for tasks parameter")
	}

	const baseUrl = "/tasks"
	const queryParams = new URLSearchParams()

	const devParams = dev ? { status: "active", dev: "true", size: "20" } : {}
	const taskParams = {
		hasNext: tasks.nextTasks ? "true" : undefined,
		hasPrev: tasks.prevTasks ? "true" : undefined,
	}

	Object.entries({ ...devParams, ...taskParams }).forEach(([key, value]) => {
		if (value !== undefined) queryParams.set(key, value)
	})

	const queryString = queryParams.toString()
	return { url: queryString ? baseUrl + "?" + queryString : baseUrl }
}

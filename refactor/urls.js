
const ConfigKeys = Object.freeze({
    status: "status",
    dev: "dev",
    size: "size",
    hasNext: "hasNext",
    hasPrev: "hasPrev"
})

const Status = Object.freeze({
    ACTIVE: "ACTIVE"
});

function UrlBuilder(baseEndpoint = "/tasks") {
    this.baseEndpoint = baseEndpoint;
    this.queryParams = new URLSearchParams();
}

UrlBuilder.prototype.setDev = function (isDev = false) {
    if (isDev) {
        this.queryParams.append(ConfigKeys.status, Status.ACTIVE)
        this.queryParams.append(ConfigKeys.dev, true);
        this.queryParams.append(ConfigKeys.size, 20);
    }
    return this
}

UrlBuilder.prototype.nextTasks = function (nextTasks = {}) {
    if (nextTasks) {
        this.queryParams.append(ConfigKeys.hasNext, true);
    }
    return this;
}

UrlBuilder.prototype.prevTasks = function (prevTasks = {}) {
    if (prevTasks) {
        this.queryParams.set(ConfigKeys.hasPrev, true);
    }
    return this;
}

UrlBuilder.prototype.build = function () {
    const queryString = this.queryParams.toString();
    return queryString
    ? `${this.baseEndpoint}?${queryString}`
    : baseEndpoint;
}

function getURL(isDev = false, taskFlags = {}) {
    const urlBuilder = new UrlBuilder();
    const finalURL = urlBuilder.setDev(isDev)
    .nextTasks(taskFlags.nextTasks)
    .prevTasks(taskFlags.prevTasks)
    .build()
    return { url: finalURL };
}

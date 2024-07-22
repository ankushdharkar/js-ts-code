const getQueryParams = (params) => {
  return Object.keys(params)
    .map((key) => `${key}=${params[key]}`)
    .join("&");
};

module.exports = { getQueryParams };

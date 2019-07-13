function checkStatus(res) {
  return new Promise((resolve, reject) => {
    if (res.headers.has("X-XSRF-TOKEN")) {
      sessionStorage.setItem("XSRF-TOKEN", res.headers.get("X-XSRF-TOKEN"));
    }
    res.json().then(body => {
      if (res.ok && body.succeeded === true) {
        resolve(body);
      } else {
        reject({
          jsError: new Error(res.statusText),
          ...body
        });
      }
    });
  });
}

function addParams(url, params) {
  const query = new URLSearchParams();
  for (var key in params) {
      const value = params[key];

      if (Array.isArray(value)) {
        query.append(key, JSON.stringify(value));
      } else if (typeof value === "object") {
        query.append(key, JSON.stringify(value));
      } else {
        query.append(key, value);
      }
  }
  if (url.includes('?')) {
    return url + '&' + query.toString();
  } else {
    return url + '?' + query.toString();
  }
}

function headers(options) {
  const headers = {
    "Content-Type": "application/json",
    ...options.headers
  };
  if (sessionStorage.getItem("XSRF-TOKEN")) {
    headers["X-XSRF-TOKEN"] = sessionStorage.getItem("XSRF-TOKEN");
  }
  return headers;
}

const Fetcher = {
  get: (url, params, options = {}) =>
    fetch(addParams(url, params), {
      ...options,
      method: "GET",
      credentials: "include",
      headers: headers(options)
    }).then(checkStatus),

  post: (url, body, options = {}) => {
    return fetch(url, {
      ...options,
      method: "POST",
      credentials: "include",
      body: JSON.stringify(body),
      headers: headers(options)
    }).then(checkStatus);
  },

  delete: (url, params, options = {}) =>
    fetch(addParams(url, params), {
      ...options,
      method: "DELETE",
      credentials: "include",
      headers: headers(options)
    }).then(checkStatus)
};

export default Fetcher;

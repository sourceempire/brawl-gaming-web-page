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
  const u = new URL(url);
  for (var key in params) {
    const value = params[key];

    if (Array.isArray(value)) {
      u.searchParams.append(key, JSON.stringify(value));
    } else if (typeof value === "object") {
      u.searchParams.append(key, JSON.stringify(value));
    } else {
      u.searchParams.append(key, value);
    }
  }
  return u.toString();
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

  post: (url, body, options = {}) =>
    fetch(url, {
      ...options,
      method: "POST",
      credentials: "include",
      body: JSON.stringify(body),
      headers: headers(options)
    }).then(checkStatus),

  delete: (url, params, options = {}) =>
    fetch(addParams(url, params), {
      ...options,
      method: "DELETE",
      credentials: "include",
      headers: headers(options)
    }).then(checkStatus)
};

export default Fetcher;

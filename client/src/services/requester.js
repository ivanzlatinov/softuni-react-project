const request = async (method, token, url, data) => {
  const options = {};

  if (method !== "GET") {
    options.method = method;

    if (data) {
      options.headers = {
        "content-type": "application/json",
      };
      options.body = JSON.stringify(data);
    }
  }

  if (token) {
    options.headers = {
      // old options + authorization header if token
      ...options.headers,
      "X-Authorization": token,
    };
  }

  const response = await fetch(url, options);

  if (!response.ok) {
    const result = await response.json();

    throw result;
  }

  try {
    const result = await response.json();

    return result;
  } catch (error) {
    //No content response for create page
    return {};
  }
};

export const requestFactory = (token) => {
  return {
    get: request.bind(null, "GET", token),
    post: request.bind(null, "POST", token),
    put: request.bind(null, "PUT", token),
    patch: request.bind(null, "PATCH", token),
    del: request.bind(null, "DELETE", token),
  };
};

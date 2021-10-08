import AbortController from 'abort-controller';

const REQUEST_TIMEOUT = 10000;
const controller = new AbortController();

const Request = {
  async get(url, options) {
    const abortController = setTimeout(() => controller.abort(), REQUEST_TIMEOUT);
    const response = await fetch(url, {
      ...options,
      signal: controller.signal,
    });

    clearTimeout(abortController);
    return response.json();
  },

  async post(url, options) {
    const abortController = setTimeout(() => controller.abort(), REQUEST_TIMEOUT);
    const response = await fetch(url, {
      ...options,
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      signal: controller.signal,
    });

    clearTimeout(abortController);
    return response.json();
  },
};

export default Request;

import axios from 'axios';
const env = process.env.NODE_ENV;
const baseURL = env === 'development' ? '/mock' : '';
const client = axios.create({
  baseURL,
  timeout: 10000
});

export default async (url, options) => {
  try {
    let result = await client({
      ...options,
      url
    });
    return result.data;
  } catch (err) {
    if (err.response) {
      Promise.reject(err.response.data);
    } else {
      Promise.reject(err.message);
    }
  }
}
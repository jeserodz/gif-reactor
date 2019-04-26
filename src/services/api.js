import axios from 'axios';

const {
  REACT_APP_GIPHY_BASE_URL: giphyBaseUrl,
  REACT_APP_GIPHY_KEY: giphyKey,
} = process.env;

const api = axios.create({
  baseURL: giphyBaseUrl,
});

api.interceptors.request.use((config) => {
  config.params.api_key = giphyKey; // eslint-disable-line
  return config;
});

export default api;

import axios from 'axios';

const server = axios.create({
  timeout: 10000
});

server.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    Promise.reject(error);
  }
);

server.interceptors.response.use(
  response => {
    const data = response.data;
    return data;
  },
  error => {
    return Promise.reject(error);
  }
);

export default server;

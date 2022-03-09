import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.33.105:3333',
});

export { api };

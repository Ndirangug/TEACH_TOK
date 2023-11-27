// src/utils/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://cross-platform.rp.devfactory.com',
});

export default api;

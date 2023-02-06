import axios from 'axios';

const api = axios.create({
  baseURL: 'https://to-do-backend-production-747a.up.railway.app/',
});

export const setToken = () => {
  const { token } = JSON.parse(localStorage.getItem('user'));
  api.defaults.headers.common.Authorization = token;
};

export const requestData = async (endpoint) => {
  setToken();
  const { data } = await api.get(endpoint);
  return data;
};

export const requestUpdate = async (endpoint, body) => {
  setToken();
  const { data } = await api.patch(endpoint, body);
  return data;
};

export const requestLogin = async (endpoint, body) => {
  const { data } = await api.post(endpoint, body);
  console.log(data);
  return data;
};

export const requestPost = async (endpoint, body) => {
  setToken();
  const { data } = await api.post(endpoint, body);
  return data;
};

export const requestDelete = async (endpoint, body) => {
  setToken();
  const { data } = await api.delete(endpoint, body);
  return data;
};

export default api;

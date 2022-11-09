import axios from 'axios';

const crmApi = axios.create({
  baseURL: 'https://635ec7b303d2d4d47af5fbcd.mockapi.io/',
});

export const token = {
  set(token) {
    crmApi.defaults.headers.Authorization = `Bearer ${token}`;
  },
  unset() {
    crmApi.defaults.headers.Authorization = ``;
  },
};

export default crmApi;

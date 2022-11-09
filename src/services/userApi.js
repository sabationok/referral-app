import axios from 'axios';

const marketApi = axios.create({
  baseURL: 'https://vidkat-api.herokuapp.com/',
});

export const token = {
  set(token) {
    marketApi.defaults.headers.Authorization = `${token}`;
  },
  unset() {
    marketApi.defaults.headers.Authorization = ``;
  },
};

export default marketApi;

import axios from 'axios';
import DST_API from './config';
import { loaderShow, loaderHide } from '../redux/actions';
import store from '../redux/store';

function configAxios() {
  const Token = localStorage.getItem('userToken');
  const axiosInstance = axios.create({
    baseURL: DST_API,
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${Token}` || '',
    },
  });

  // Add a request interceptor
  axiosInstance.interceptors.request.use((config) => {
    store.dispatch(loaderShow(true));
    return config;
  }, (error) => {
    store.dispatch(loaderHide(false));
    return Promise.reject(error);
  });

  // Add a response interceptor
  axiosInstance.interceptors.response.use((response) => {
    store.dispatch(loaderHide(false));
    return response;
  }, (error) => {
    store.dispatch(loaderHide(false));
    return Promise.reject(error);
  });
  return axiosInstance;
}

export default configAxios;

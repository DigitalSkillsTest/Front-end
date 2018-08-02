import axios from 'axios';
import DST_API from './config';

function configAxios() {
  const axiosInstance = axios.create({
    baseURL: DST_API,
    headers: { 'Content-Type': 'application/json' },
  });

  return axiosInstance;
}

export default configAxios;

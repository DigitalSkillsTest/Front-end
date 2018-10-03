import api from '../utility/api';

const fetchExamResult = (data) => {
  const path = '/exam/result/all';
  return api().post(path, data).then(res => res).catch(error => error);
};

const fetchResultByCategory = (data) => {
  const path = '/exam/result/category';
  return api().post(path, data).then(res => res).catch(error => error);
};

const sendMail = (data) => {
  const path = '/result/email';
  return api().post(path, data, {
    headers: {
      'Content-Type': 'multipart/form-data',
      Authorization: `Bearer ${localStorage.getItem('userToken')}`,
    },
  }).then(res => res).catch(error => error);
};

const ResultService = {
  fetchExamResult,
  fetchResultByCategory,
  sendMail,
};

export default ResultService;

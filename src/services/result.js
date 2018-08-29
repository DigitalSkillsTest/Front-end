import api from '../utility/api';

const fetchExamResult = (data) => {
  const path = '/exam/result/all';
  return api().post(path, data).then(res => res).catch(error => error);
};

const fetchResultByCategory = (data) => {
  const path = '/exam/result/category';
  return api().post(path, data).then(res => res).catch(error => error);
};

const ResultService = {
  fetchExamResult,
  fetchResultByCategory,
};

export default ResultService;

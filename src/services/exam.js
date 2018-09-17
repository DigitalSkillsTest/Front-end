import api from '../utility/api';


const examStart = () => {
  const path = '/exam/start';
  return api().get(path).then(res => res).catch(error => error);
};

const setExamStatus = ({ examId }) => {
  const path = `/exam/${examId}`;
  return api().get(path).then(res => res).catch(error => error);
};

const fetchQuestion = (data) => {
  const path = '/exam/next';
  return api().post(path, data).then(res => res).catch(error => error);
};

const saveAnswer = (data) => {
  const path = '/exam/answer';
  return api().post(path, data).then(res => res).catch(error => error);
};

const examService = {
  fetchQuestion,
  examStart,
  saveAnswer,
  setExamStatus,
};

export default examService;

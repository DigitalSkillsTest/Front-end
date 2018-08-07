import api from '../utility/api';

const createUser = (data) => {
  const path = '/auth/register';
  return api().post(path, data).then(res => res).catch(error => error);
};

const userService = {
  createUser,
};

export default userService;

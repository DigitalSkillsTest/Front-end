import { notification } from 'antd';

const IconNotification = (type, message, description) => {
  notification[type]({
    message,
    description,
  });
};

export default IconNotification;

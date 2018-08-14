import React from 'react';
import { Progress } from 'antd';
import PropTypes from 'prop-types';

const ProgressBar = (props) => {
  const { percent } = props;
  return (
    <Progress percent={percent} strokeWidth={12} strokeColor="#1EA771" status="active" />
  );
};

export default ProgressBar;

ProgressBar.propTypes = {
  percent: PropTypes.number.isRequired,
};

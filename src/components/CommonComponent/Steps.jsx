import React from 'react';
import { Steps } from 'antd';
import PropTypes from 'prop-types';
import { getSteps } from '../../utility/common';

const { Step } = Steps;

const StepComponent = (props) => {
  const { current } = props;
  const currentStep = getSteps(current);
  return (
    <Steps {...props} current={currentStep}>
      <Step className={currentStep >= 1 ? 'step1' : ''} />
      <Step className={currentStep >= 2 ? 'step2' : ''} />
      <Step className={currentStep >= 3 ? 'step3' : ''} />
      <Step className={currentStep >= 4 ? 'step4' : ''} />
      <Step className={currentStep >= 5 ? 'step5' : ''} />
      <Step className={currentStep >= 6 ? 'step6' : ''} />
    </Steps>
  );
};

export default StepComponent;

StepComponent.propTypes = {
  current: PropTypes.string.isRequired,
};

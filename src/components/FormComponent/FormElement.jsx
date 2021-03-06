import React from 'react';
import PropTypes from 'prop-types';
import { Form, Input } from 'antd';

const FormItem = Form.Item;

const RenderInput = ({ getFieldDecorator, name, placeholder, rules, ...props }) => (
  <FormItem>
    {getFieldDecorator(name, {
      rules,
    })(
      <Input {...props} className="formInput" placeholder={placeholder} />,
    )}
  </FormItem>
);

RenderInput.propTypes = {
  getFieldDecorator: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  rules: PropTypes.instanceOf(Array),
};

RenderInput.defaultProps = {
  rules: PropTypes.instanceOf(Array),
};

export default RenderInput;

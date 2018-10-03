import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Form, Row, Col, Radio, Button, Icon,
} from 'antd';
import Layout from '../components/Layout/Layout';
import RenderInput from '../components/FormComponent/FormElement';
import {
  createUserReq,
  clearCurrentUser,
  clearExam,
  resetExamStatus,
} from '../redux/actions';

const RadioGroup = Radio.Group;
const FormItem = Form.Item;

function validateUsername(rule, value, callback) {
  if (value && value.indexOf(' ') >= 0) {
    callback('space is not allow in username');
  }
  callback();
}

class UserRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    localStorage.clear();
    const { dispatch } = this.props;
    dispatch(clearCurrentUser());
    dispatch(clearExam());
    dispatch(resetExamStatus());
  }

  handleSubmit(e) {
    e.preventDefault();
    const { form, dispatch, history } = this.props;
    form.validateFields((err, values) => {
      if (!err) {
        const {
          name, lastName, mail, company, position, age, gender,
        } = values;
        const data = {
          name,
          lastName,
          mail,
          company,
          position,
          age,
          gender,
          history,
        };
        dispatch(createUserReq(data));
      }
    });
  }

  render() {
    const { form: { getFieldDecorator } } = this.props;
    return (
      <Layout sidebar>
        <div className="bodybg2" />
        <div className="userRegister">
          <Row>
            <Col className="m-b-15">
              <h1 className="pageHeading">
                Completa tus datos
                <span className="pageSubHeading">
                  antes de comenzar
                </span>
              </h1>
            </Col>
          </Row>

          <Row>
            <Form onSubmit={this.handleSubmit}>
              <Col xs={24} sm={24} md={24} lg={14}>
                <Row>
                  <Col>
                    <RenderInput
                      name="name"
                      rules={[
                        { required: true, message: 'Please input your username!' },
                        { validator: validateUsername },
                        { pattern: new RegExp('[a-zA-Z][a-zA-Z0-9]'), message: 'Please input valid username!' },
                      ]}
                      getFieldDecorator={getFieldDecorator}
                    />

                    <RenderInput
                      name="lastName"
                      rules={[
                        { required: true, message: 'Please input your lastName!' },
                        { whitespace: true, message: 'Please input your lastName!' },
                      ]}

                      getFieldDecorator={getFieldDecorator}
                    />

                    <RenderInput
                      name="mail"
                      type="email"
                      rules={[
                        { required: true, message: 'Please input your email!' },
                      ]}
                      getFieldDecorator={getFieldDecorator}
                    />

                    <RenderInput
                      name="company"
                      rules={[
                        { required: true, message: 'Please input your company!' },
                        { whitespace: true, message: 'Please input your company!' },
                      ]}
                      getFieldDecorator={getFieldDecorator}
                    />

                    <RenderInput
                      name="position"
                      rules={[
                        { required: true, message: 'Please input your position!' },
                        { whitespace: true, message: 'Please input your position!' },
                      ]}
                      getFieldDecorator={getFieldDecorator}
                    />

                    <RenderInput
                      name="age"
                      type="number"
                      min="1"
                      rules={[{ required: true, message: 'Please input your age!' }]}
                      getFieldDecorator={getFieldDecorator}
                    />

                  </Col>
                  <Col className="m-t-15">
                    <FormItem>
                      {getFieldDecorator('gender', {
                        rules: [{ required: true, message: 'Please select your gender!' }],
                      })(
                        <RadioGroup>
                          <Radio value="female">
                            Femenino
                          </Radio>
                          <Radio value="male">
                            Masculino
                          </Radio>
                          <Radio value="other">
                            Otro
                          </Radio>
                        </RadioGroup>,
                      )}
                    </FormItem>
                  </Col>
                </Row>
              </Col>
              <Col xs={24} sm={24} md={24} lg={10} className="userRegisterRightBlock">
                <Row>
                  <Col>
                    <Radio className="text-left" defaultChecked>
                      Acepto
                      <br className="termdevider" />
                      <span className="terms">
                        Términos y condiciones
                      </span>
                    </Radio>
                  </Col>
                  <Col>
                    <Button htmlType="submit" className="btn-green m-t-60">
                      Siguiente
                      {''}
                      <Icon type="caret-right" />
                    </Button>
                  </Col>
                </Row>
              </Col>
            </Form>
          </Row>
        </div>
      </Layout>
    );
  }
}

const UserRegisterForm = Form.create()(UserRegister);
const mapStateToProps = state => state;
export default connect(mapStateToProps)(UserRegisterForm);

UserRegister.propTypes = {
  history: PropTypes.shape({}).isRequired,
  form: PropTypes.shape({}).isRequired,
  dispatch: PropTypes.func.isRequired,
};

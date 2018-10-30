import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Translate } from 'react-localize-redux';
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
      <Translate>
        {({ translate }) => (
          <Layout sidebar>
            <div className="bodybg2" />
            <div className="userRegister">
              <Row>
                <Col className="m-b-15">
                  <h1 className="pageHeading">
                    {translate('registerpage.heading')}
                    <span className="pageSubHeading">
                      {translate('registerpage.subheading')}
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
                          placeholder={translate('registerpage.formfield.name')}
                          rules={[
                            { required: true, message: `${translate('registerpage.error.required')} ${translate('registerpage.formfield.name')}!` },
                            { validator: validateUsername },
                            { pattern: new RegExp('[a-zA-Z][a-zA-Z0-9]'), message: 'Please input valid username!' },
                          ]}
                          getFieldDecorator={getFieldDecorator}
                        />

                        <RenderInput
                          name="lastName"
                          placeholder={translate('registerpage.formfield.lastname')}
                          rules={[
                            { required: true, message: `${translate('registerpage.error.required')} ${translate('registerpage.formfield.lastname')}!` },
                            { whitespace: true, message: `${translate('registerpage.error.whitespace')}` },
                          ]}

                          getFieldDecorator={getFieldDecorator}
                        />

                        <RenderInput
                          name="mail"
                          placeholder={translate('registerpage.formfield.email')}
                          type="email"
                          rules={[
                            { required: true, message: `${translate('registerpage.error.required')} ${translate('registerpage.formfield.email')}!` },
                          ]}
                          getFieldDecorator={getFieldDecorator}
                        />

                        <RenderInput
                          name="company"
                          placeholder={translate('registerpage.formfield.company')}
                          rules={[
                            { required: true, message: `${translate('registerpage.error.required')} ${translate('registerpage.formfield.company')}!` },
                            { whitespace: true, message: `${translate('registerpage.error.whitespace')}` },
                          ]}
                          getFieldDecorator={getFieldDecorator}
                        />

                        <RenderInput
                          name="position"
                          placeholder={translate('registerpage.formfield.position')}
                          rules={[
                            { required: true, message: `${translate('registerpage.error.required')} ${translate('registerpage.formfield.position')}!` },
                            { whitespace: true, message: `${translate('registerpage.error.whitespace')}` },
                          ]}
                          getFieldDecorator={getFieldDecorator}
                        />

                        <RenderInput
                          name="age"
                          placeholder={translate('registerpage.formfield.age')}
                          type="number"
                          min="1"
                          rules={[{ required: true, message: `${translate('registerpage.error.required')} ${translate('registerpage.formfield.age')}!` }]}
                          getFieldDecorator={getFieldDecorator}
                        />

                      </Col>
                      <Col className="m-t-15">
                        <FormItem>
                          {getFieldDecorator('gender', {
                            rules: [{ required: true, message: `${translate('registerpage.error.required')} ${translate('registerpage.formfield.gender.gender')}!` }],
                          })(
                            <RadioGroup>
                              <Radio value={translate('registerpage.formfield.gender.genderoptions.option1')}>
                                {translate('registerpage.formfield.gender.genderoptions.option1')}
                              </Radio>
                              <Radio value={translate('registerpage.formfield.gender.genderoptions.option2')}>
                                {translate('registerpage.formfield.gender.genderoptions.option2')}
                              </Radio>
                              <Radio value={translate('registerpage.formfield.gender.genderoptions.option3')}>
                                {translate('registerpage.formfield.gender.genderoptions.option3')}
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
                          {translate('terms.text1')}
                          <br className="termdevider" />
                          <span className="terms">
                            {translate('terms.text2')}
                          </span>
                        </Radio>
                      </Col>
                      <Col>
                        <Button htmlType="submit" className="btn-green m-t-60">
                          {translate('nextbtn')}
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
        )}
      </Translate>
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

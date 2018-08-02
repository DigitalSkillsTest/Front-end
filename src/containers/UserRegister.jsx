import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Form, Row, Col, Radio, Button, Icon, Input,
} from 'antd';
import Layout from '../components/Layout/Layout';
// import RenderInput from '../components/FormComponent/Input';
import { createUserReq } from '../redux/actions';

const RadioGroup = Radio.Group;
const FormItem = Form.Item;
class UserRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const { form, dispatch, history } = this.props;
    form.validateFields((err, values) => {
      if (!err) {
        const { name, lastName, mail, comapany, position, age, gender } = values;
        const data = {
          name,
          lastName,
          mail,
          comapany,
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
    const { getFieldDecorator } = this.props.form;
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
                    <FormItem>
                      {getFieldDecorator('name', {
                        rules: [{ required: true, message: 'Please input your username!' }],
                      })(
                        <Input type="text" placeholder="Nombre" className="formInput" />,
                      )}
                    </FormItem>

                    <FormItem>
                      {getFieldDecorator('lastName', {
                        rules: [{ required: true, message: 'Please input your LastName!' }],
                      })(
                        <Input type="text" placeholder="Apellido" className="formInput" />,
                      )}
                    </FormItem>

                    <FormItem>
                      {getFieldDecorator('mail', {
                        rules: [{ required: true, message: 'Please input your Email!' }],
                      })(
                        <Input type="email" placeholder="Mail" className="formInput" />,
                      )}
                    </FormItem>

                    <FormItem>
                      {getFieldDecorator('comapany', {
                        rules: [{ required: true, message: 'Please input your company!' }],
                      })(
                        <Input type="text" placeholder="Empresa" className="formInput" />,
                      )}
                    </FormItem>

                    <FormItem>
                      {getFieldDecorator('position', {
                        rules: [{ required: true, message: 'Please input your Position!' }],
                      })(
                        <Input type="text" placeholder="Cargo" className="formInput" />,
                      )}
                    </FormItem>

                    <FormItem>
                      {getFieldDecorator('age', {
                        rules: [{ required: true, message: 'Please input your Age!' }],
                      })(
                        <Input type="text" placeholder="Edad" className="formInput" />,
                      )}
                    </FormItem>

                    {/* <RenderInput type="text" placeholder="Edad" /> */}

                  </Col>
                  <Col className="m-t-15">
                    <FormItem>
                      {getFieldDecorator('gender', {
                        rules: [{ required: true, message: 'Please Select your Gender!' }],
                      })(
                        <RadioGroup onChange={this.onChange}>
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
                    <Radio className="text-left">
                      Acepto
                      <br />
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

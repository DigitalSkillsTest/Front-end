import React, { Component } from 'react';
import {
  Row, Col, Radio, Button, Icon,
} from 'antd';
import Layout from '../components/Layout/Layout';
import RenderInput from '../components/FormComponent/Input';

const RadioGroup = Radio.Group;

class UserRegister extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 1,
    };
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    const { value } = e.target;
    this.setState({
      value,
    });
  }

  render() {
    const { value } = this.state;
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
            <Col xs={24} sm={24} md={24} lg={14}>
              <Row>
                <Col>
                  <RenderInput type="text" placeholder="Nombre" />
                  <RenderInput type="text" placeholder="Apellido" />
                  <RenderInput type="email" placeholder="Mail" />
                  <RenderInput type="text" placeholder="Empresa" />
                  <RenderInput type="text" placeholder="Cargo" />
                  <RenderInput type="text" placeholder="Edad" />
                </Col>
                <Col className="m-t-15">
                  <RadioGroup onChange={this.onChange} value={value}>
                    <Radio value={1}>
                      Femenino
                    </Radio>
                    <Radio value={2}>
                    Masculino
                    </Radio>
                    <Radio value={3}>
                    Otro
                    </Radio>
                  </RadioGroup>
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
                  <Button className="btn-green m-t-60">
                    Siguiente
                    {''}
                    <Icon type="caret-right" />
                  </Button>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </Layout>
    );
  }
}

export default UserRegister;

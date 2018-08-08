import React, { Component } from 'react' ;
import {
  Row, Col, Button, Icon, Radio,
} from 'antd';
import logo from '../images/logo.svg';
import Layout from '../components/Layout/Layout';

class SendMail extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Layout sidebar>
        <div className="bg-image" />
        <div className="sendMailWrapper">
          <Row>
            <Col xs={24}>
              <h1>
                ¡Has terminado!
                <span>
                  Si lo deseas, puedes enviar los resultados a tu mail
                </span>
              </h1>
            </Col>

            <Col xs={24}>
              <Button htmlType="submit" className="btn-green">
                Enviar al mail
                {''}
                <Icon type="caret-right" />
              </Button>
              <p className="help-text">
                Se enviará al mail previamente definido
              </p>
            </Col>

            <Col xs={24} className="userRegisterRightBlock">
              <Radio className="text-left" defaultChecked>
                Acepto
                <br className="termdevider" />
                <span className="terms">
                  Términos y condiciones
                </span>
              </Radio>
            </Col>

            <Col span={24} className="welcomeScreenLogoWrapper">
              <img src={logo} alt="logo" className="welcomeScreenLogo" />
            </Col>
          </Row>
        </div>
      </Layout>
    );
  }
}

export default SendMail;

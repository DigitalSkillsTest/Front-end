import React, { Component } from 'react';
import { Row, Col, Button } from 'antd';
import PropTypes from 'prop-types';
import * as routes from '../routes/path';
import Layout from '../components/Layout/Layout';
import logo from '../images/logo.svg';

class WelComepage extends Component {
  constructor(props) {
    super(props);
    this.onClickNextBtn = this.onClickNextBtn.bind(this);
  }

  onClickNextBtn() {
    const { history } = this.props;
    history.push(routes.UserRegister);
  }

  render() {
    return (
      <Layout sidebar={false}>
        <div className="bg-img" />
        <Row gutter={{ xs: 8, sm: 16, md: 24 }}>
          <Col span={24} className="welcomeScreenLogoWrapper">
            <img src={logo} alt="logo" className="welcomeScreenLogo" />
          </Col>
        </Row>
        <div className="welcomeScreen">
          <Row gutter={{ xs: 8, sm: 16, md: 24 }}>
            <Col span={10} className="testStartBlock">
              <h1>
                <span>
                  Test de
                </span>
                <br />
                Habilidades
                {' '}
                <br />
                Digitales
              </h1>
              <Button className="btn-green" onClick={this.onClickNextBtn}>
                Comenzar
              </Button>
            </Col>
          </Row>
        </div>
      </Layout>
    );
  }
}

export default WelComepage;

WelComepage.propTypes = {
  history: PropTypes.shape({}).isRequired,
};

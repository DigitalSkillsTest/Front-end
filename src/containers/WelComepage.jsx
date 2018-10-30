import React, { Component } from 'react';
import { Row, Col, Button } from 'antd';
import PropTypes from 'prop-types';
import { Translate } from 'react-localize-redux';
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
                  <Translate id="welcomepage.heading1" />
                </span>
                <br />
                <Translate id="welcomepage.heading2" />
                {' '}
                <br />
                <Translate id="welcomepage.heading3" />
              </h1>
              <Button className="btn-green" onClick={this.onClickNextBtn}>
                <Translate id="welcomepage.btnText" />
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

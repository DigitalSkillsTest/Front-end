import React from 'react';
import PropTypes from 'prop-types';
import { Layout, Row, Col } from 'antd';
import logoWhite from '../../images/logo-white.svg';
import brainColor from '../../images/brain-color.svg';
import 'antd/dist/antd.css';

const { Content, Sider } = Layout;

export default class MainLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { sidebar, children } = this.props;
    return (
      <Layout style={{ minHeight: '100vh' }}>
        {sidebar && (
          <Sider
            breakpoint="lg"
            collapsedWidth="0"
          >
            <Row type="flex" justify="center" align="top">
              <Col span={24} className="text-center sidebarTop">
                <img src={brainColor} alt="logo-white" className="brainColor" />
                <h2>
                  <span>
                    Test de
                  </span>
                  <br />
                    Habilidades
                  {' '}
                  <br />
                    Digitales
                </h2>
              </Col>
            </Row>

            {/* <Row type="flex" justify="center" align="bottom">
              <Col span={24} className="text-center">
                <img src={logoWhite} alt="logo-white" className="sidebarLogo" />
              </Col>
            </Row> */}

            <Row type="flex" justify="center" align="bottom">
              <Col span={24} className="text-center">
                <img src={logoWhite} alt="logo-white" className="sidebarLogo" />
              </Col>
            </Row>

          </Sider>
        )}
        <Layout style={{ background: '#ddd' }}>
          <Content style={{ margin: '25px' }}>
            {children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}

MainLayout.propTypes = {
  sidebar: PropTypes.bool,
  children: PropTypes.instanceOf(Array),
};

MainLayout.defaultProps = {
  sidebar: PropTypes.bool,
  children: PropTypes.instanceOf(Array),
};

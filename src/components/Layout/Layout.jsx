import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Layout, Row, Col } from 'antd';
import logoWhite from '../../images/logo-white.svg';
import brainColor from '../../images/brain-color.svg';
import 'antd/dist/antd.css';

const { Content, Sider, Header } = Layout;

class MainLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      sidebar, children, currentUser, color,
    } = this.props;
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

            {currentUser
              && (
                <Row type="flex" justify="center" align="bottom">
                  <Col span={24} className="text-center userInfo">
                    <h2 className="username">
                      {currentUser.data.name}
                      {' '}
                      {' '}
                      {' '}
                      {currentUser.data.lastName}
                      {' '}
                    </h2>
                    <p>
                      {currentUser.data.mail}
                    </p>
                    <p>
                      {currentUser.data.company}
                    </p>
                    <p>
                      {currentUser.data.position}
                    </p>
                    <p>
                      {currentUser.data.age}
                      {' '}
                      años
                    </p>
                  </Col>
                </Row>
              )
            }

            <Row type="flex" justify="center" align="bottom">
              <Col span={24} className="text-center">
                <img src={logoWhite} alt="logo-white" className="sidebarLogo" />
              </Col>
            </Row>

          </Sider>
        )}
        <Layout style={{ background: color || '#F2F2F1' }}>
          {sidebar && (
            <Header className="responsiveHeader">
              <div className="logo-responsive" />
              <h1>
                <span>
                  Test de
                  {' '}
                </span>
                Habilidades Digitales
              </h1>
            </Header>
          )}
          <Content style={{ margin: '25px' }}>
            {children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.currentUser,
});
export default connect(mapStateToProps)(MainLayout);

MainLayout.propTypes = {
  sidebar: PropTypes.bool,
  currentUser: PropTypes.shape({}),
  children: PropTypes.instanceOf(Array),
};

MainLayout.defaultProps = {
  sidebar: PropTypes.bool,
  currentUser: PropTypes.shape({}),
  children: PropTypes.instanceOf(Array),
};

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Layout, Row, Col } from 'antd';
import { Redirect } from 'react-router-dom';
import * as routes from '../../routes/path';
import 'antd/dist/antd.css';
import { fetchUserReq, setExamStatusReq } from '../../redux/actions';

const { Content, Sider, Header } = Layout;

class MainLayout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { dispatch, currentUser, sidebar, exam: { isexamCompleted } } = this.props;
    const userId = localStorage.getItem('userId');
    const examId = localStorage.getItem('examId');
    if (userId && sidebar && !currentUser) {
      dispatch(fetchUserReq(userId));
    }
    if (isexamCompleted === null && examId) {
      dispatch(setExamStatusReq({ examId }));
    }
  }

  render() {
    const {
      sidebar, children, currentUser, bgColor,
    } = this.props;

    if (currentUser && !currentUser.data) {
      return <Redirect to={routes.UserRegister} />;
    }
    return (
      <Layout style={{ minHeight: '100vh' }}>
        {sidebar && (
          <Sider
            breakpoint="lg"
            collapsedWidth="0"
          >
            <Row type="flex" justify="center" align="top">
              <Col span={24} className="text-center sidebarTop">
                <img src="/assets/images/brain-color.svg" alt="logo-white" className="brainColor" />
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
                <img src="/assets/images/logo-white.svg" alt="logo-white" className="sidebarLogo" />
              </Col>
            </Row>

          </Sider>
        )}
        <Layout style={{ background: bgColor || '#F2F2F1' }}>
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
          <Content>
            {children}
          </Content>
        </Layout>
      </Layout>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.currentUser,
  exam: state.exam,
});
export default connect(mapStateToProps)(MainLayout);

MainLayout.propTypes = {
  sidebar: PropTypes.bool,
  dispatch: PropTypes.func.isRequired,
  currentUser: PropTypes.shape({}),
  children: PropTypes.instanceOf(Array),
};

MainLayout.defaultProps = {
  sidebar: PropTypes.bool,
  currentUser: PropTypes.shape({}),
  children: PropTypes.instanceOf(Array),
};

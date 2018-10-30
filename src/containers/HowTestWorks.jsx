import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Translate } from 'react-localize-redux';
import {
  Row, Col, Button, Icon,
} from 'antd';
import * as routes from '../routes/path';
import Layout from '../components/Layout/Layout';
import { setExamId, setExamStatusReq } from '../redux/actions';
import chartImage from '../images/chart.svg';

class HowTestWorks extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onClickNextBtn = this.onClickNextBtn.bind(this);
    this.onClickPreviousBtn = this.onClickPreviousBtn.bind(this);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    const examId = localStorage.getItem('examId');
    if (examId) {
      dispatch(setExamId());
      dispatch(setExamStatusReq({ examId }));
    }
  }

  onClickPreviousBtn() {
    const { history } = this.props;
    history.push(routes.UserRegister);
  }

  onClickNextBtn() {
    const { history, exam: { isexamCompleted } } = this.props;
    if (isexamCompleted) {
      history.push(routes.TestFinish);
    } else {
      history.push(routes.TestStart);
    }
  }

  render() {
    return (
      <Translate>
        {({ translate }) => (
          <Layout sidebar>
            <div className="howTestWorks">
              <Row>
                <Col xs={24} sm={24} md={24} lg={12} className="m-b-15">
                  <Row>
                    <Col xs={24}>
                      <h1 className="pageHeading">
                        {translate('howtestworks.heading')}
                        <span className="pageSubHeading">
                          {translate('howtestworks.subheading')}
                        </span>
                      </h1>
                    </Col>
                  </Row>

                  <Row>
                    <Col xs={24}>
                      <p className="testinfo">
                        {translate('howtestworks.description')}
                      </p>
                    </Col>
                  </Row>

                  <Row>
                    <Col xs={24}>
                      <h2 className="testCategoryTitle">
                        {translate('howtestworks.categoryheading')}
                      </h2>
                    </Col>

                    <Col xs={24}>
                      <ul className="testCategory">
                        <li>
                          Virtual Language
                        </li>
                        <li>
                          Adaptación al Cambio
                        </li>
                        <li>
                          Virtual Work habilities
                        </li>
                        <li>
                          Digital Leadership
                        </li>
                        <li>
                          Digital mindset
                        </li>
                        <li>
                          Virtual Core Business mindset
                        </li>
                      </ul>
                    </Col>
                  </Row>
                </Col>

                <Col xs={24} sm={24} md={24} lg={12} className="m-b-15 text-center">
                  <img src={chartImage} alt="chart" className="chartImage" />
                  <div className="questiontimewrapper">
                    <h5 className="questionMarkIcon">
                      30
                      {' '}
                      {translate('howtestworks.question')}
                    </h5>
                    <h5 className="timerIcon">
                      20
                      {' '}
                      {translate('howtestworks.time')}
                    </h5>
                  </div>
                </Col>
              </Row>
            </div>
            <div className="stepButtonWrapper">
              <Row>
                <Col>
                  <Button.Group>
                    <Button className="btn-default" onClick={this.onClickPreviousBtn}>
                      <Icon type="caret-left" />
                      {''}
                      {translate('prevbtn')}
                    </Button>
                    <Button className="btn-default pull-right" onClick={this.onClickNextBtn}>
                      {translate('nextbtn')}
                      {''}
                      <Icon type="caret-right" />
                    </Button>
                  </Button.Group>
                </Col>
              </Row>
            </div>
          </Layout>
        )}
      </Translate>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.currentUser,
  exam: state.exam,
});
export default connect(mapStateToProps)(HowTestWorks);

HowTestWorks.propTypes = {
  history: PropTypes.shape({}).isRequired,
  exam: PropTypes.shape({}).isRequired,
  dispatch: PropTypes.func.isRequired,
};

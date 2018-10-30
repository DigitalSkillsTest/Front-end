import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Row, Col, Button, Icon,
} from 'antd';
import { Translate } from 'react-localize-redux';
import * as routes from '../routes/path';
import Layout from '../components/Layout/Layout';
import { setExamId, resetExamStatus } from '../redux/actions';

class TestFinish extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onClickNextBtn = this.onClickNextBtn.bind(this);
    this.onClickPreviousBtn = this.onClickPreviousBtn.bind(this);
  }

  componentDidMount() {
    const { history, dispatch } = this.props;
    const examId = localStorage.getItem('examId');
    if (examId) {
      dispatch(setExamId());
    } else {
      history.push(routes.HowTestWorks);
    }
  }

  onClickPreviousBtn() {
    const { history, dispatch } = this.props;
    dispatch(resetExamStatus());
    history.push(routes.UserRegister);
  }

  onClickNextBtn() {
    const { history } = this.props;
    history.push(routes.TestResult);
  }


  UNSAFE_componentWillReceiveProps(nextProps) {
    const { exam: { isexamCompleted }, history } = this.props;
    if (!nextProps.exam.isexamCompleted && nextProps.exam.isexamCompleted !== isexamCompleted) {
      history.push(routes.HowTestWorks);
    }
  }

  render() {
    return (
      <Translate>
        {({ translate }) => (
          <Layout sidebar>
            <div className="testFinishWrapper">
              <Row>
                <Col xs={24} className="m-b-15">
                  <h1>
                    {translate('testfinishpage.heading')}
                    <span>
                      {translate('testfinishpage.subheading')}
                    </span>
                  </h1>
                  <p className="testFinishDesc">
                    {translate('testfinishpage.description')}
                  </p>
                  <h6>
                    {translate('testfinishpage.nextpagetext')}
                  </h6>
                </Col>
              </Row>
            </div>
            <div className="stepButtonWrapper">
              <Row>
                <Col xs={24}>
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
  exam: state.exam,
});
export default connect(mapStateToProps)(TestFinish);

TestFinish.propTypes = {
  history: PropTypes.shape({}).isRequired,
  exam: PropTypes.shape({}).isRequired,
};

import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Row, Col, Button,
} from 'antd';
import PropTypes from 'prop-types';
import Layout from '../Layout/Layout';
import * as routes from '../../routes/path';
import { clearExam, resetExamStatus } from '../../redux/actions';

class TimeOut extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(clearExam());
    dispatch(resetExamStatus());
  }

  handleClick() {
    const { history, dispatch } = this.props;
    dispatch(clearExam());
    dispatch(resetExamStatus());
    history.push(routes.HowTestWorks);
  }

  render() {
    return (
      <Layout sidebar>
        <div className="sendMailWrapper">
          <Row>
            <Col xs={24} className="text-center">
              <h1>
                Oops...Timeout
                <span>
                  Better luck next time.
                </span>
              </h1>
            </Col>

            <Col xs={24} className="text-center">
              <Button htmlType="submit" className="btn-green" onClick={this.handleClick}>
                Start Again
              </Button>
            </Col>
          </Row>
        </div>
        <div />
      </Layout>
    );
  }
}

const mapStateToProps = state => state;

export default connect(mapStateToProps)(TimeOut);

TimeOut.propTypes = {
  history: PropTypes.shape({}).isRequired,
  dispatch: PropTypes.func.isRequired,
};

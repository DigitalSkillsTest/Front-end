import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Form } from 'antd';
import PropTypes from 'prop-types';
import moment from 'moment';
import TestCategory from '../components/TestComponent/TestCategory';
import TestComponent from '../components/TestComponent/TestComponent';
import * as routes from '../routes/path';
import {
  fetchQuestionReq, examStartReq, saveAnswerReq, nextQuestion, previousQuestion, setExamId, setExamStatus,
} from '../redux/actions';

class TestStart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showCategory: true,
      prevClick: false,
      timer: null,
    };
    this.onClickNextBtn = this.onClickNextBtn.bind(this);
    this.onClickPreviousBtn = this.onClickPreviousBtn.bind(this);
    this.createTimer = this.createTimer.bind(this);
    // this.getTime = this.getTime.bind(this);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    const examId = localStorage.getItem('examId');
    if (examId) {
      dispatch(setExamId());
    } else {
      dispatch(examStartReq());
    }
  }

  componentWillReceiveProps(nextProps) {
    const { prevClick, timer } = this.state;
    const { exam: { currentQuestion }, QIndex } = this.props;
    if (nextProps.exam.currentQuestion) {
      this.setState({ showCategory: false });
    }

    if (currentQuestion && nextProps.exam.currentQuestion.question.categories_COD !== currentQuestion.question.categories_COD) {
      this.setState({ showCategory: true });
    }

    if (currentQuestion && prevClick && nextProps.exam.currentQuestion.question.categories_COD !== currentQuestion.question.categories_COD) {
      this.setState({ showCategory: false });
    }
  }

  componentDidUpdate(nextProps) {
    const { dispatch, exam: { examId, QIndex } } = this.props;

    if (nextProps.exam.QIndex !== QIndex) {
      const data = {
        examId,
        QIndex,
      };
      dispatch(fetchQuestionReq(data));
    }
  }

  onClickPreviousBtn() {
    this.setState({ prevClick: true });
    const { dispatch } = this.props;
    // call previous question
    dispatch(previousQuestion());
  }

  onClickNextBtn(e) {
    e.preventDefault();
    const { showCategory } = this.state;
    const { form, exam: { examId, QIndex, currentQuestion }, dispatch } = this.props;
    this.setState({ prevClick: false });
    if (QIndex === 30) {
      const { history, dispatch } = this.props;
      dispatch(setExamStatus());
      history.push(routes.TestFinish);
    }
    form.validateFields((err, values) => {
      if (!err && examId) {
        if (currentQuestion && !showCategory) {
          const questionCode = Object.values(values)[0];
          const questionId = currentQuestion.question._id;
          // get Answer from code
          const { score } = currentQuestion.question.options.filter(answer => answer.code === questionCode)[0];
          // save Answer
          const saveAnswerData = {
            examId,
            questionId,
            userCode: questionCode,
            userScore: score,
          };
          dispatch(saveAnswerReq(saveAnswerData));
        }

        // call next question
        if (showCategory) {
          this.setState({ showCategory: false });
          const data = {
            examId,
            QIndex,
          };
          dispatch(fetchQuestionReq(data));
        } else {
          dispatch(nextQuestion());
        }
      }
    });
  }

  getTime(hours, minutes, seconds) {
    const milliseconds = moment.duration({ seconds, minutes, hours }).as('milliseconds');
    // console.log(milliseconds)
  }

  createTimer() {
    const { timer } = this.state;
    const date = Date.now() + (30 * 60 * 1000);
    if (timer === null) {
      this.setState({
        timer: date,
      });
      return date;
    }
    return date;
    // this.getTime();
  }

  render() {
    const { showCategory } = this.state;
    const { exam: { currentQuestion, QIndex }, exam, form } = this.props;
    return (
      <div>
        {showCategory
          && (
            <TestCategory
              onClickNextBtn={this.onClickNextBtn}
              onClickPreviousBtn={this.onClickPreviousBtn}
              category={currentQuestion && currentQuestion.question.categories_COD}
              index={QIndex}
            />
          )
        }

        {!showCategory
          && (
            <TestComponent
              onClickNextBtn={this.onClickNextBtn}
              onClickPreviousBtn={this.onClickPreviousBtn}
              exam={exam}
              form={form}
              timer={Date.now() + (3 * 60 * 1000)}
              currentCounter={this.getTime}
            />
          )
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.currentUser,
  exam: state.exam,
});
const TestStartForm = Form.create()(TestStart);
export default connect(mapStateToProps)(TestStartForm);

TestStart.propTypes = {
  history: PropTypes.shape({}).isRequired,
  exam: PropTypes.shape({}).isRequired,
  dispatch: PropTypes.func.isRequired,
  form: PropTypes.shape({}).isRequired,
};
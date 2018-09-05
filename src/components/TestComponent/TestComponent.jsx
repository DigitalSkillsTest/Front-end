import React, { Component } from 'react';
import {
  Form, Row, Col, Button, Icon, Radio,
} from 'antd';
import PropTypes from 'prop-types';
import Layout from '../Layout/Layout';
import { getBgColor, getSteps } from '../../utility/common';
import { ProgressBar, Steps } from '../CommonComponent';

const FormItem = Form.Item;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

function getPercent(value) {
  return Math.round(value * 100 / 30);
}

class TestComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clientWidth: window.innerWidth,
    };
    this.handleResize = this.handleResize.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize() {
    this.setState({ clientWidth: window.innerWidth });
  }

  render() {
    const { clientWidth } = this.state;
    const {
      exam: { currentQuestion, QIndex }, form: { getFieldDecorator }, onClickNextBtn, onClickPreviousBtn,
    } = this.props;
    if (currentQuestion) {
      const {
        categories_COD, question, options, category, userCode,
      } = currentQuestion.question;
      return (
        <Layout sidebar>
          <Row>
            <Col xs={24}>
              {clientWidth < 768 && (
                <div className="questionSteps responsive">
                  <Steps current={categories_COD} />
                </div>
              )}
              <div className="testCategoryHeading" style={{ background: getBgColor(categories_COD) }}>
                {category}
              </div>
            </Col>
          </Row>
          <Form onSubmit={onClickNextBtn} className="test-form">
            <div className="testWrapper">

              <Row>
                {/* <CountDownTimer timer={timer} currentCounter={currentCounter} /> */}
                <Col sm={24}>
                  <div className="mcqWrapper">
                    <div className="mcqQuestion">
                      <div className="questionNos" style={{ background: getBgColor(categories_COD) }}>
                        {QIndex}
                      </div>
                      <div className="question">
                        {question}
                      </div>
                    </div>
                    <div className={`mcqAnswer answer-options step${getSteps(categories_COD)}`}>
                      <FormItem>
                        {getFieldDecorator(`answerOptions${QIndex}`, {
                          initialValue: userCode,
                          rules: [{
                            required: true, message: 'Please select an option.',
                          }],
                        })(
                          <RadioGroup size="large">
                            {options.map(option => (
                              <RadioButton key={option._id} value={option.code}>
                                {option.answer}
                              </RadioButton>
                            ))
                            }
                          </RadioGroup>,
                        )}
                      </FormItem>

                    </div>
                    {/* <div className="stepButtonWrapper">
                    <Row>
                      <Col>
                        {clientWidth < 768 && (
                          <div className="progressWrapper responsive">
                            <ProgressBar percent={getPercent(QIndex)} />
                          </div>
                        )}
                        <FormItem>
                          <Button.Group>
                            <Button className="btn-default" onClick={onClickPreviousBtn}>
                              <Icon type="caret-left" />
                              {''}
                              Anterior
                            </Button>
                            <Button className="btn-default pull-right" htmlType="submit">
                              Siguiente
                              {''}
                              <Icon type="caret-right" />
                            </Button>
                          </Button.Group>
                        </FormItem>
                      </Col>
                    </Row>
                  </div> */}
                  </div>

                  {clientWidth > 768 && (
                    <React.Fragment>
                      <div className="questionSteps">
                        <Steps current={categories_COD} direction="vertical" />
                      </div>
                      {/* <div className="progressWrapper">
                          <ProgressBar percent={getPercent(QIndex)} />
                        </div> */}
                    </React.Fragment>
                  )}

                  {/* <div className="stepButtonWrapper">
                  <Row>
                    <Col>
                      {clientWidth < 768 && (
                        <div className="progressWrapper responsive">
                          <ProgressBar percent={getPercent(QIndex)} />
                        </div>
                      )}
                      <FormItem>
                        <Button.Group>
                          <Button className="btn-default" onClick={onClickPreviousBtn}>
                            <Icon type="caret-left" />
                            {''}
                            Anterior
                          </Button>
                          <Button className="btn-default pull-right" htmlType="submit">
                            Siguiente
                            {''}
                            <Icon type="caret-right" />
                          </Button>
                        </Button.Group>
                      </FormItem>
                    </Col>
                  </Row>
                </div> */}

                </Col>
                {/* <Col sm={24} md={6}>

                <div className="testSubCategory">
                  <div className="card">
                    <div className="card-head" style={{ background: getBgColor(categories_COD) }}>
                      {categoryData[getSteps(categories_COD) - 1].category}
                    </div>
                    <div className="card-body">
                      {categoryData[getSteps(categories_COD) - 1].subcategory.map(item => (
                        <p className="subCategory" key={Math.random()}>
                          {item.sub_cat}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              </Col> */}
              </Row>
            </div>
            <div className="stepButtonWrapper">
              <Row>
                <Col>
                  <div className="progressWrapper responsive">
                    <ProgressBar percent={getPercent(QIndex)} />
                  </div>
                  <FormItem>
                    <Button.Group>
                      <Button className="btn-default" onClick={onClickPreviousBtn}>
                        <Icon type="caret-left" />
                        {''}
                        Anterior
                      </Button>
                      <Button className="btn-default pull-right" htmlType="submit">
                        Siguiente
                        {''}
                        <Icon type="caret-right" />
                      </Button>
                    </Button.Group>
                  </FormItem>
                </Col>
              </Row>
            </div>
          </Form>
        </Layout>
      );
    } return '';
  }
}

export default TestComponent;

TestComponent.propTypes = {
  exam: PropTypes.shape({}).isRequired,
  form: PropTypes.shape({}).isRequired,
  onClickNextBtn: PropTypes.func.isRequired,
  onClickPreviousBtn: PropTypes.func.isRequired,
  // timer: PropTypes.number.isRequired,
  // currentCounter: PropTypes.func.isRequired,
};

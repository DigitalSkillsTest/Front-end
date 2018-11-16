import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Row, Col, Button, Icon,
} from 'antd';
import { Translate } from 'react-localize-redux';
import html2canvas from 'html2canvas';
import { PolarArea as PolarAreaChart } from 'react-chartjs';
import * as routes from '../routes/path';
import Layout from '../components/Layout/Layout';
import { Card, Steps } from '../components/CommonComponent';
import { fetchResultByCategoryReq } from '../redux/actions';
import {
  getCategory,
  getBgColor,
  renderLongDesc,
  renderStrenth,
  renderWeakness,
  categoryData,
} from '../utility/common';

function chartData(chartdata, color) {
  const chart = chartdata.map(item => ({
    value: item.isScore,
    color: color === item.categories_COD ? getBgColor(item.categories_COD) : '#E7E6E5',
    label: getCategory(item.categories_COD),
  }));
  return chart;
}

function avgScore(avg) {
  return avg.map(item => item.isScore).reduce((acc, val) => acc + val) / 5;
}

const options = {
  showTooltips: false,
  animateRotate: false,
};

class TestResultByCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clientWidth: window.innerWidth,
      resultData: null,
      categoryIndex: 1,
      mailData: [],
    };
    this.handleResize = this.handleResize.bind(this);
    this.onClickNextBtn = this.onClickNextBtn.bind(this);
    this.onClickPreviousBtn = this.onClickPreviousBtn.bind(this);
    this.renderResult = this.renderResult.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
    const { dispatch, history, location: { state } } = this.props;
    const examId = localStorage.getItem('examId');
    if (examId) {
      dispatch(fetchResultByCategoryReq({ examId }));
    } else {
      history.push(routes.HowTestWorks);
    }

    if (state === undefined) {
      history.push(routes.TestResult);
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const { result: { resultByCategory } } = this.props;
    const { categoryIndex } = this.state;
    if (resultByCategory !== prevProps.result.resultByCategory) {
      this.renderResult(resultByCategory.data, categoryIndex);
    }
    if (categoryIndex !== prevState.categoryIndex) {
      this.renderResult(resultByCategory.data, categoryIndex);
    }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  onClickPreviousBtn() {
    const { history } = this.props;
    const { categoryIndex } = this.state;
    if (categoryIndex === 1) {
      history.push(routes.TestResult);
    }
    this.setState(prevState => ({ categoryIndex: prevState.categoryIndex > 1 ? prevState.categoryIndex - 1 : 1 }));
  }

  async onClickNextBtn() {
    const { history, location: { state } } = this.props;
    const { categoryIndex, resultData, mailData } = this.state;

    const chartImg = await html2canvas(document.querySelector('.subcatchartwrapper'),
      { scale: 4 }).then(canvas => canvas.toDataURL('image/jpeg'));

    const scoreImg = await html2canvas(document.querySelector('.subCategoryScroeWrapper'),
      { scale: 4 }).then(canvas => canvas.toDataURL('image/jpeg'));

    this.setState(prevState => ({ categoryIndex: prevState.categoryIndex < 6 ? prevState.categoryIndex + 1 : 6 }));
    mailData[categoryIndex - 1] = { data: resultData, chartImg, scoreImg };

    if (categoryIndex === 6) {
      const location = {
        pathname: routes.SendMail,
        state: { mailData, resultData: state },
      };
      history.push(location);
    }
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    const { exam: { isexamCompleted }, history } = this.props;
    if (!nextProps.exam.isexamCompleted && nextProps.exam.isexamCompleted !== isexamCompleted) {
      history.push(routes.HowTestWorks);
    }
  }

  handleResize() {
    this.setState({ clientWidth: window.innerWidth });
  }

  renderResult(result, index) {
    const resultData = result.filter((item) => {
      if (index === 1 && item.categories_COD === 'A') {
        return item;
      }
      if (index === 2 && item.categories_COD === 'B') {
        return item;
      }
      if (index === 3 && item.categories_COD === 'C') {
        return item;
      }
      if (index === 4 && item.categories_COD === 'D') {
        return item;
      }
      if (index === 5 && item.categories_COD === 'E') {
        return item;
      }
      if (index === 6 && item.categories_COD === 'F') {
        return item;
      }
      return null;
    });
    this.setState({ resultData });
  }

  render() {
    const { clientWidth, resultData, categoryIndex } = this.state;
    const { result: { overallResult } } = this.props;
    return (
      <Translate>
        {({ translate }) => (
          <Layout sidebar>
            {resultData && resultData.length > 0 && (
              <div className="testResultbyCategory">
                <Row>
                  <Col xs={24}>
                    {clientWidth < 768 && (
                      <div className="questionSteps responsive">
                        <Steps current={resultData[0].categories_COD} />
                      </div>
                    )}
                  </Col>
                </Row>
                <Row>
                  <Col xs={24} sm={24} md={16} className="m-b-15">
                    <Row>
                      <Col xs={24}>
                        <div className="testCategoryHeading" style={{ background: getBgColor(resultData[0].categories_COD) }}>
                          {getCategory(resultData[0].categories_COD)}
                        </div>
                        <p className="resultDesc">
                          {renderLongDesc(resultData)}
                        </p>
                      </Col>

                      <Col xs={24}>
                        <div className="strenthWeakDesc">
                          <Row gutter={{
                            lg: 32,
                          }}
                          >
                            <Col xs={24} sm={24} md={24} lg={12}>
                              <Card title={translate('resultpage.Strengths')} icon="plus">
                                <p>
                                  {renderStrenth(resultData).every(x => x === false) ? 'None' : renderStrenth(resultData)}
                                </p>
                              </Card>
                            </Col>
                            <Col xs={24} sm={24} md={24} lg={12}>
                              <Card title={translate('resultpage.Weaknesses')} icon="minus">
                                <p>
                                  {renderWeakness(resultData).every(x => x === false) ? 'None' : renderWeakness(resultData)}
                                </p>
                              </Card>
                            </Col>
                          </Row>
                        </div>
                      </Col>
                    </Row>
                  </Col>

                  <Col xs={24} sm={24} md={8} className="m-b-15 text-center">
                    <div className="subcatchartwrapper">
                      {overallResult && (
                        <PolarAreaChart
                          data={chartData(overallResult.data, resultData[0].categories_COD)}
                          width="250"
                          height="250"
                          options={options}
                          redraw
                        />
                      )}
                    </div>
                    <Row>
                      <Col xs={24} className="subCategoryScroeWrapper">
                        <h3 className="categoryName">
                          {getCategory(resultData[0].categories_COD)}
                          {' '}
                          Score
                        </h3>
                        <p className="score">
                          {parseFloat(avgScore(resultData)).toFixed(1)}
                        </p>
                        <div className="subCategoryScoreWrapper">
                          {categoryData[categoryIndex - 1].subcategory.map((item, i) => (
                            <p className="subcategoryScore" key={Math.random()}>
                              <span style={{ color: getBgColor(resultData[0].categories_COD) }}>
                                {resultData[i].isScore}
                              </span>
                              <span>
                                {item.sub_cat}
                              </span>
                            </p>
                          ))}
                        </div>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </div>
            )}
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
  result: state.result,
});
export default connect(mapStateToProps)(TestResultByCategory);

TestResultByCategory.propTypes = {
  history: PropTypes.shape({}).isRequired,
  result: PropTypes.shape({}).isRequired,
  dispatch: PropTypes.func.isRequired,
  exam: PropTypes.shape({}).isRequired,
  location: PropTypes.shape({}).isRequired,
};

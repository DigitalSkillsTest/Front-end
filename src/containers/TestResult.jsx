import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Row, Col, Button, Icon, Slider,
} from 'antd';
import { PolarArea as PolarAreaChart } from 'react-chartjs';
import * as routes from '../routes/path';
import Layout from '../components/Layout/Layout';
import { Card } from '../components/CommonComponent';
import { fetchExamResultReq } from '../redux/actions';
import {
  getBgColor,
  getCategory,
  renderLongDesc,
  renderStrenth,
  renderWeakness,
} from '../utility/common';

function renderPercent(percent) {
  return percent.map(item => item.isScore * 5).reduce((acc, val) => acc + val) / 120 * 100;
}

function chartData(chartdata) {
  return chartdata.map(item => ({
    value: item.isScore,
    color: getBgColor(item.categories_COD),
    label: getCategory(item.categories_COD),
  }));
}

class TestResult extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onClickNextBtn = this.onClickNextBtn.bind(this);
    this.onClickPreviousBtn = this.onClickPreviousBtn.bind(this);
  }

  componentDidMount() {
    const { dispatch, history } = this.props;
    const examId = localStorage.getItem('examId');
    if (examId) {
      dispatch(fetchExamResultReq({ examId }));
    } else {
      history.push(routes.TestStart);
    }
  }

  onClickPreviousBtn() {
    const { history } = this.props;
    history.push(routes.TestFinish);
  }

  onClickNextBtn() {
    const { history } = this.props;
    history.push(routes.TestResultByCategory);
  }

  render() {
    const { result: { overallResult } } = this.props;
    return (
      <Layout sidebar>
        <div className="testResult">
          {overallResult && (

            <Row>
              <Col xs={24} sm={24} md={12} className="m-b-15">
                <Row>
                  <Col xs={24}>
                    <h2>
                      Overall Score
                    </h2>
                    <h1>
                      {parseFloat(renderPercent(overallResult.data)).toFixed(0)}
                      <span>
                        %
                      </span>
                    </h1>
                    <div className="slider">
                      <Slider
                        marks={{
                          0: '', 33: '', 66: '', 100: '',
                        }}
                        defaultValue={renderPercent(overallResult.data)}
                        disabled
                      />
                    </div>
                    <p className="resultDesc">
                      {renderLongDesc(overallResult.data)}
                    </p>
                  </Col>

                  <Col xs={24}>
                    <div className="strenthWeakDesc">
                      <Row gutter={{
                        lg: 32,
                      }}
                      >
                        <Col xs={24} sm={24} md={24} lg={12}>
                          <Card title="Fortalezas" icon="plus">
                            <p>
                              {renderStrenth(overallResult.data).every(x => x === false) ? 'None' : renderStrenth(overallResult.data)}
                            </p>
                          </Card>
                        </Col>
                        <Col xs={24} sm={24} md={24} lg={12}>
                          <Card title="Debilidades" icon="minus">
                            <p>
                              {renderWeakness(overallResult.data).every(x => x === false) ? 'None' : renderWeakness(overallResult.data)}
                            </p>
                          </Card>
                        </Col>
                      </Row>
                    </div>
                  </Col>
                </Row>
              </Col>

              <Col xs={24} sm={24} md={12} className="m-b-15">
                <PolarAreaChart data={chartData(overallResult.data)} width="400" height="400" />
                <Row>
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

            </Row>
          )}
        </div>
        <div className="stepButtonWrapper">
          <Row>
            <Col xs={24}>
              <Button.Group>
                <Button className="btn-default" onClick={this.onClickPreviousBtn}>
                  <Icon type="caret-left" />
                  {''}
                  Anterior
                </Button>
                <p className="keyarearesult">
                  A cotinuación podrás ver los detalles de cada
                  <br />
                  área clave del desarrollo de habilidades digitales
                </p>
                <Button className="btn-default pull-right" onClick={this.onClickNextBtn}>
                  Siguiente
                  {''}
                  <Icon type="caret-right" />
                </Button>
              </Button.Group>
            </Col>
          </Row>
        </div>
      </Layout>
    );
  }
}

const mapStateToProps = state => ({
  exam: state.exam,
  result: state.result,
});
export default connect(mapStateToProps)(TestResult);

TestResult.propTypes = {
  history: PropTypes.shape({}).isRequired,
  result: PropTypes.shape({}).isRequired,
  dispatch: PropTypes.func.isRequired,
};

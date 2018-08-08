import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Row, Col, Button, Icon, Steps,
} from 'antd';
import { PolarArea as PolarAreaChart } from 'react-chartjs';
import * as routes from '../routes/path';
import Layout from '../components/Layout/Layout';

const { Step } = Steps;

const data = [
  {
    value: 300,
    color: '#F7464A',
    highlight: '#FF5A5E',
    label: 'Red',
  },
  {
    value: 50,
    color: '#46BFBD',
    highlight: '#5AD3D1',
    label: 'Green',
  },
  {
    value: 100,
    color: '#FDB45C',
    highlight: '#FFC870',
    label: 'Yellow',
  },
  {
    value: 40,
    color: '#949FB1',
    highlight: '#A8B3C5',
    label: 'Grey',
  },
  {
    value: 120,
    color: '#4D5360',
    highlight: '#616774',
    label: 'Dark Grey',
  },

];

class TestResultByCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clientWidth: window.innerWidth,
    };
    this.handleResize = this.handleResize.bind(this);
    this.onClickNextBtn = this.onClickNextBtn.bind(this);
    this.onClickPreviousBtn = this.onClickPreviousBtn.bind(this);
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }


  onClickPreviousBtn() {
    const { history } = this.props;
    history.push(routes.TestResult);
  }

  onClickNextBtn() {
    const { history } = this.props;
    history.push(routes.SendMail);
  }

  handleResize() {
    this.setState({ clientWidth: window.innerWidth });
  }

  render() {
    const { clientWidth } = this.state;
    return (
      <Layout sidebar>
        <div className="testResultbyCategory">
          <Row>
            <Col xs={24}>
              {clientWidth < 768 && (
                <div className="questionSteps responsive">
                  <Steps current={0}>
                    <Step className="step1" />
                    <Step />
                    <Step />
                    <Step />
                    <Step />
                    <Step />
                  </Steps>
                </div>
              )}
            </Col>
          </Row>
          <Row>
            <Col xs={24} sm={24} md={16} className="m-b-15">
              <Row>
                <Col xs={24}>
                  <div className="testCategoryHeading" style={{ background: '#0085C6' }}>
                    Virtual Language
                  </div>
                  <p className="resultDesc">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                  </p>
                </Col>

                <Col xs={24}>
                  <div className="strenthWeakDesc">
                    <Row gutter={{
                      lg: 32,
                    }}
                    >
                      <Col xs={24} sm={24} md={24} lg={12}>
                        <div className="card">
                          <div className="card-head" style={{ background: '#E7E7E8' }}>
                            <Icon type="plus" style={{ fontSize: 24, color: '#5AB38A', paddingRight: 10 }} />
                            Fortalezas
                          </div>
                          <div className="card-body">
                            <p className="strenthDesc">
                              Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
                            </p>
                          </div>
                        </div>
                      </Col>
                      <Col xs={24} sm={24} md={24} lg={12}>
                        <div className="card">
                          <div className="card-head" style={{ background: '#E7E7E8' }}>
                            <Icon type="minus" style={{ fontSize: 24, color: '#E34640', paddingRight: 10 }} />
                            Debilidades
                          </div>
                          <div className="card-body">
                            <p className="strenthDesc">
                              Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
                            </p>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
            </Col>

            <Col xs={24} sm={24} md={8} className="m-b-15 text-center">
              <PolarAreaChart data={data} width="200" height="200" />
              <Row>
                <Col xs={24}>
                  <h3 className="categoryName">
                    Virtual
                    <br />
                    Language Score
                  </h3>
                  <p className="score">
                    3.0
                  </p>
                  <div className="subCategoryScoreWrapper">
                    <p className="subcategoryScore">
                      1
                      <span>
                        Technical-Language
                      </span>
                    </p>
                    <p className="subcategoryScore">
                      2
                      <span>
                        Conocimiento específico del rol
                      </span>
                    </p>
                    <p className="subcategoryScore">
                      3
                      <span>
                        Creación digital vs analógica
                      </span>
                    </p>
                    <p className="subcategoryScore">
                      4
                      <span>
                        Aprendizaje digital y desarrollo
                      </span>
                    </p>
                    <p className="subcategoryScore">
                      5
                      <span>
                        Conocimientos básicos de tecnologías
                      </span>
                    </p>
                  </div>
                </Col>
              </Row>
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
                  Anterior
                </Button>
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

const mapStateToProps = state => state;
export default connect(mapStateToProps)(TestResultByCategory);

TestResultByCategory.propTypes = {
  history: PropTypes.shape({}).isRequired,
};

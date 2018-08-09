import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Row, Col, Button, Icon,
} from 'antd';
import { PolarArea as PolarAreaChart } from 'react-chartjs';
import * as routes from '../routes/path';
import Layout from '../components/Layout/Layout';
import { Card } from '../components/CommonComponent';

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

class TestResult extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onClickNextBtn = this.onClickNextBtn.bind(this);
    this.onClickPreviousBtn = this.onClickPreviousBtn.bind(this);
  }

  onClickPreviousBtn() {
    const { history } = this.props;
    history.push(routes.TestFinish);
  }

  onClickNextBtn() {
    const { history } = this.props;
    history.push('/test/result/vertual');
  }

  render() {
    return (
      <Layout sidebar>
        <div className="testResult">
          <Row>
            <Col xs={24} sm={24} md={12} className="m-b-15">
              <Row>
                <Col xs={24}>
                  <h2>
                    Overall Score
                  </h2>
                  <h1>
                    75
                    <span>
                      %
                    </span>
                  </h1>
                  <p className="resultDesc">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
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
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
                          </p>
                        </Card>
                      </Col>
                      <Col xs={24} sm={24} md={24} lg={12}>
                        <Card title="Debilidades" icon="minus">
                          <p>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
                          </p>
                        </Card>
                      </Col>
                    </Row>
                  </div>
                </Col>
              </Row>
            </Col>

            <Col xs={24} sm={24} md={12} className="m-b-15">
              <PolarAreaChart data={data} width="400" height="400" />
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

const mapStateToProps = state => state;
export default connect(mapStateToProps)(TestResult);

TestResult.propTypes = {
  history: PropTypes.shape({}).isRequired,
};

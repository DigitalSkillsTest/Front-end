import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Row, Col, Button, Icon,
} from 'antd';
import * as routes from '../routes/path';
import Layout from '../components/Layout/Layout';

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
    history.push(routes.TestCategoty);
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

            <Col xs={24} sm={24} md={12} className="m-b-15">
              <h6>
                A continuación podrás ver tus resultados
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
export default connect(mapStateToProps)(TestResult);

TestResult.propTypes = {
  history: PropTypes.shape({}).isRequired,
};

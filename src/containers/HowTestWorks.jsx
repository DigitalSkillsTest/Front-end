import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Row, Col, Button, Icon,
} from 'antd';
import Layout from '../components/Layout/Layout';
import chartImage from '../images/chart.svg';

class HowTestWorks extends Component {
  constructor(props) {
    super(props);
    console.log(this.props);
  }

  render() {
    return (
      <Layout sidebar>
        <div className="howTestWorks">
          <Row>
            <Col xs={24} sm={24} md={24} lg={12} className="m-b-15">
              <Row>
                <Col xs={24}>
                  <h1 className="pageHeading">
                    Cómo funciona el test
                    <span className="pageSubHeading">
                      Instrucciones y etapas
                    </span>
                  </h1>
                </Col>
              </Row>

              <Row>
                <Col xs={24}>
                  <p className="testinfo">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
                  </p>
                </Col>
              </Row>

              <Row>
                <Col xs={24}>
                  <h2 className="testCategoryTitle">
                    6 áreas de desarrollo personal
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
                <h5 className="question">
                  30 preguntas
                </h5>
                <h5 className="timer">
                  20 minutos
                </h5>
              </div>
            </Col>
          </Row>
        </div>
        <div className="stepButtonWrapper">
          <Row>
            <Col>
              <Button className="btn-default">
                <Icon type="caret-left" />
                {''}
                Anterior
              </Button>
              <Button className="btn-default pull-right">
                Siguiente
                {''}
                <Icon type="caret-right" />
              </Button>
            </Col>
          </Row>
        </div>
      </Layout>
    );
  }
}

const mapStateToProps = state => ({
  currentUser: state.currentUser,
});
export default connect(mapStateToProps)(HowTestWorks);

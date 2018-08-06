import React, { Component } from 'react';
import {
  Row, Col, Button, Icon,
} from 'antd';
import PropTypes from 'prop-types';
import * as routes from '../../routes/path';
import Layout from '../Layout/Layout';

class TestCategotyDescription extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onClickNextBtn = this.onClickNextBtn.bind(this);
    this.onClickPreviousBtn = this.onClickPreviousBtn.bind(this);
  }

  onClickPreviousBtn() {
    const { history } = this.props;
    history.push(routes.HowTestWorks);
  }

  onClickNextBtn() {
    const { history } = this.props;
    history.push(routes.TestComponent);
  }

  render() {
    return (
      <Layout sidebar color="#0085C6">
        <div className="testcategorywrapper">
          <Row>
            <Col xs={24} className="testcategory">
              <h1>
                Virtual
                <br />
                Language
              </h1>
              <p>
                El dominio de la terminología tech especifica para tu rol
              </p>
              <ul>
                ¿Qué analizaremos?
                <li>
                  Technical-Language
                </li>
                <li>
                  Conocimiento específico del rol
                </li>
                <li>
                  Creación digital vs analógica
                </li>
                <li>
                  Aprendizaje digital y desarrollo
                </li>
                <li>
                  Aprendizaje digital y desarrollo
                </li>
              </ul>
            </Col>
          </Row>
        </div>
        <div className="stepButtonWrapper">
          <Row>
            <Col>
              <Button.Group>
                <Button className="btn-default transparent" onClick={this.onClickPreviousBtn}>
                  <Icon type="caret-left" />
                  {''}
                  Anterior
                </Button>
                <Button className="btn-default transparent pull-right" onClick={this.onClickNextBtn}>
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

export default TestCategotyDescription;

TestCategotyDescription.propTypes = {
  history: PropTypes.shape({}).isRequired,
};

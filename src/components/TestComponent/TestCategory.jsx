import React, { Component } from 'react';
import {
  Row, Col, Button, Icon,
} from 'antd';
import PropTypes from 'prop-types';
import Layout from '../Layout/Layout';
import { getBgColor, categoryData, getSteps } from '../../utility/common';

class TestCategotyDescription extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { onClickNextBtn, onClickPreviousBtn, category } = this.props;
    return (
      <Layout sidebar bgColor={getBgColor(category)}>
        <div className="testcategorywrapper">
          <Row>
            <Col xs={24} className="testcategory">
              <h1>
                {categoryData[getSteps(category) - 1].category}
              </h1>
              <p>
                El dominio de la terminología tech especifica para tu rol
              </p>
              <ul>
                ¿Qué analizaremos?
                {categoryData[getSteps(category) - 1].subcategory.map(item => (
                  <li className="subCategory" key={Math.random()}>
                    {item.sub_cat}
                  </li>
                ))}
              </ul>
            </Col>
          </Row>
        </div>
        <div className="stepButtonWrapper">
          <Row>
            <Col>
              <Button.Group>
                <Button className="btn-default transparent" onClick={onClickPreviousBtn} disabled={this.props.index > 1 ? false : true}>
                  <Icon type="caret-left" />
                  {''}
                  Anterior
                </Button>
                <Button className="btn-default transparent pull-right" onClick={onClickNextBtn}>
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
  onClickNextBtn: PropTypes.func.isRequired,
  onClickPreviousBtn: PropTypes.func.isRequired,
};

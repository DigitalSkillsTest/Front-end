import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  Row, Col, Button, Icon,
} from 'antd';
import * as routes from '../routes/path';
import Layout from '../components/Layout/Layout';

class TestFinish extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.onClickNextBtn = this.onClickNextBtn.bind(this);
    this.onClickPreviousBtn = this.onClickPreviousBtn.bind(this);
  }

  onClickPreviousBtn() {
    const { history } = this.props;
    history.push(routes.TestCategoty);
  }

  onClickNextBtn() {
    const { history } = this.props;
    history.push(routes.TestCategoty);
  }

  render() {
    return (
      <Layout sidebar>
        <div className="testFinishWrapper">
          <Row>
            <Col xs={24} className="m-b-15">
              <h1>
                ¡Felicitaciones!
                <span>
                  Has terminado el test :D
                </span>
              </h1>
              <p className="testFinishDesc">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
              </p>
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
export default connect(mapStateToProps)(TestFinish);

TestFinish.propTypes = {
  history: PropTypes.shape({}).isRequired,
};
